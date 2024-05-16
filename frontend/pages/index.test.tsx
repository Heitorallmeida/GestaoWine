
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Home from ".";
import * as useDataObject from "../hooks/useData";
import { axios } from './utils';
global.ResizeObserver = require("resize-observer-polyfill");

// const useDataObject = { useData };
const mockedWindowAlert = jest.fn();
window.alert = mockedWindowAlert;

const setup = () => render(<Home />);

const mockedSetNumberOfDays = jest.fn();

const useDataReturn = {
    pieChartData: '14',
    linearChart: [],
    barChartData: [],
    numberOfDays: 7,
    setNumberOfDays: mockedSetNumberOfDays,
    fetchGraphData: jest.fn(),
};

jest.spyOn(useDataObject, 'useData').mockReturnValue(useDataReturn);


jest.mock('axios', () => ({
    post: jest.fn(),
    get: jest.fn(),
}));



jest.mock("recharts", () => {
    const OriginalModule = jest.requireActual("recharts");
    return {
      ...OriginalModule,
      ResponsiveContainer: ({ children }) => (
        <OriginalModule.ResponsiveContainer width={800} height={800}>
          {children}
        </OriginalModule.ResponsiveContainer>
      ),
      ResizeObserver: jest.fn(),
    };
  });


describe('Page', () => {
    it('should render title', () => {
        
        const { getByText } = setup();
    
        const heading = getByText(/Gerenciando sua loja: superando os desafios do seu negócio/i);
    
        expect(heading).toBeInTheDocument();
    })
    
    it('should update number of days', () => {
        const mock = jest.fn();
        jest.spyOn(useDataObject, 'useData').mockReturnValue({
            pieChartData: '14',
            linearChart: [],
            barChartData: [],
            numberOfDays: 7,
            setNumberOfDays: mock,
            fetchGraphData: jest.fn(),
        });
        const { getByRole } = setup();
    
        const input = getByRole('textbox', {name: ''});
    
        fireEvent.change(input, { target: { value: 10 } });

        expect(mock).toHaveBeenCalled();

        fireEvent.change(input, { target: { value: 130 } });
        
        expect(mockedWindowAlert).toHaveBeenCalled();
       
        fireEvent.change(input, { target: { value: -1 } });
        
        expect(mockedWindowAlert).toHaveBeenCalled();
    })
})
