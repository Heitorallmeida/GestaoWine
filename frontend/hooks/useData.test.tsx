import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';
import { useData } from './useData';
import axios from 'axios';

const setup = () => renderHook(() => useData());
describe('useData', ()=>{
    beforeEach(()=>{
        jest.mock('axios', () => {
            return {
              __esModule: true,    //    <----- this __esModule: true is important
              ...jest.requireActual('axios'),
              get: jest.fn().mockResolvedValue({ data: { accuracy: 97 } }),
              post: jest.fn().mockResolvedValue({
                data: {
                  prediction: {
                    '2021-09-01': 10,
                    '2021-09-02': 20,
                  },
                  monthly_forecast: [100, 200, 300, 400],
                },
              }),
            };
          });
    })
    it('should call axios.post with the correct data', async () => {
        const { result } = setup();
        const days = 7;
        const spy = jest.spyOn(axios, 'post').mockResolvedValue({
            data: {
                prediction: {
                    '2021-09-01': 10,
                    '2021-09-02': 20,
                },
                monthly_forecast: [100, 200, 300, 400],
            },
        });
       
       
        await act(async ()=>await result.current.fetchGraphData(days))
        expect(spy).toHaveBeenCalledWith('http://localhost:8000/api/predict/forecast', { numberofdays: days });
        expect(spy).toHaveBeenCalledWith('http://localhost:8000/api/predict/forecast/by-month', { numberofdays: 120 });

        expect(result.current.linearChart).toEqual([
            { name: '31/08/2021', vendas: '10' },
            { name: '01/09/2021', vendas: '20' },
        ]);
        expect(result.current.barChartData).toEqual([
            { name: 'Mes 1', venda: '100' },
            { name: 'Mes 2', venda: '200' },
            { name: 'Mes 3', venda: '300' },
            { name: 'Mes 4', venda: '400' },
        ]);
    });

    it('should call get', async ()=>{
        const spyGet = jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                accuracy: 97,
            },
        });
        const { result } = setup();
        await act(async ()=>await result.current.fetchGraphData(7))

        expect(spyGet).toHaveBeenCalledWith('http://localhost:8000/api/accuracy');
    })
})