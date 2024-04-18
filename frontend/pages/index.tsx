'use client'
import { Input, ThemeProvider, Typography, createTheme } from "@mui/material";
import WineBarIcon from '@mui/icons-material/WineBar';
import Layout from "./layout";
import Image from 'next/image'
import dynamic from "next/dynamic"
import * as S from './styles';
import { useCallback, useEffect, useState } from "react";
import { axios } from "./utils";


const SimpleBarChartWithoutSSR = dynamic(
  import("../components/barchart"),
  { ssr: false }
);

const SimplePieChartWithoutSSR = dynamic(
  import("../components/pieChart"),
  { ssr: false }
);

const SimpleLinearChartWithoutSSR = dynamic(
  import("../components/linearChart"),
  { ssr: false }
);

export default function Home() {
  const [pieChartData, setPieChartData] = useState();
  const [linearChart, setLinearChart] = useState<any[] | undefined>();
  const [barChartData, setBarChartData] = useState<any[] | undefined>();
  const [numberOfDays, setNumberOfDays] = useState(7);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#690101',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });

    function dataAtualFormatada(date: Date){
      var data = date,
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear();

      return dia+"/"+mes+"/"+ano;
  }

    const fetchGraphData = useCallback(async (days: number) =>{
      try{
        const responseForeCast = await axios.post('http://localhost:8000/api/predict/forecast', {numberofdays: days});
        const forecast = await responseForeCast.data.prediction;
        const forecastKeys = Object.keys(forecast);
        const convertedForeCast = forecastKeys.map((key) => {
          return {
            name: dataAtualFormatada(new Date(key)),
            vendas: forecast[key].toFixed()
          }
        });
        setLinearChart(convertedForeCast);
        
        const responseForeCastByMonth = await axios.post('http://localhost:8000/api/predict/forecast/by-month', {numberofdays: 120})
        const monthForecast = await responseForeCastByMonth.data.monthly_forecast;
        console.log(monthForecast)
        const data = [
        {
          "name": "Mes 1",
          "venda": monthForecast[0].toFixed(),
        },
        {
          "name": "Mes 2",
          "venda":  monthForecast[1].toFixed(),
        },
        {
          "name": "Mes 3",
          "venda":  monthForecast[2].toFixed(),
        },
        {
          "name": "Mes 4",
          "venda":  monthForecast[3].toFixed(),
        },
      ];
        setBarChartData(data);
        
        const responseAccuracy = await axios.get('http://localhost:8000/api/accuracy')
        const accuracy = await responseAccuracy.data.accuracy;
        setPieChartData(accuracy);
      } catch(error) {
        console.info(error)
      }
      
      
    },[])

    useEffect(()=>{
      void fetchGraphData(numberOfDays)
    },[fetchGraphData, numberOfDays])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <S.HeaderWrapper>
          <S.LogoWrapper>
            <WineBarIcon color="primary" style={{width: 200, height: 60}} />
          </S.LogoWrapper>
          <div style={{width: '50%', justifyContent: 'end', display: 'flex', marginRight: '80px'}}>
            <Typography fontWeight={400} color='#23306A' variant='h5'>Gerenciando sua loja: <br/>superando os desafios do seu negócio</Typography>
          </div>
        </S.HeaderWrapper>
        <div style={{padding: '20px 50px 50px 50px', background: '#E6EDF5'}}>
        <div style={{display: 'flex', alignItems: 'end', width: '99%', height: '70px', margin: '20px 0px', background: 'white', borderRadius: '15px', padding: '10px', position: 'relative'}}>
          <Typography fontWeight={400} color='#23306A' variant='h6' style={{position: 'absolute', top: '2%', left: '10px'}}>Número de dias para previsão de venda</Typography>
          <Input 
            placeholder="Numero de dias" 
            style={{width: '100%'}} 
            onChange={(event)=>{
              console.log(event.target.value)
              if(Number(event.target.value) <= 0 && event.target.value !== ''){
                window.alert('O número de dias não pode ser menor ou igual 0')
              }
              else if(Number(event.target.value) >= 120){
                window.alert('O número de dias não pode ser maior que 120')
              } else{
                setNumberOfDays(Number(event.target.value) ?? 7)}
              }
            } />
        </div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '20px'}}>
            <S.PieChartWrapper>
              <Typography fontWeight={400} color='#23306A' variant='h6' style={{position: 'absolute', top: '2%', left: '5%'}}>Acuracia</Typography>
              <SimplePieChartWithoutSSR data={pieChartData} />
              <Typography fontWeight={400} color='#23306A' variant='h6' style={{position: 'absolute', bottom: '35%'}}>{pieChartData}</Typography>
            </S.PieChartWrapper>
            <div style={{width: '70%', display: 'flex', height: '336px', background: 'white', borderRadius: '15px', alignItems: 'end', position: 'relative'}}>
              <Typography fontWeight={400} color='#23306A' variant='h6' style={{position: 'absolute', top: '2%', left: '2%'}}>Previsão dia</Typography>
              <SimpleLinearChartWithoutSSR data={linearChart}/>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'end', width: '100%', margin: '20px 0px'}}>
            <div suppressHydrationWarning style={{display: 'flex', width: '100%', height: '336px', background: 'white', borderRadius: '15px', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                <Typography fontWeight={400} color='#23306A' variant='h6' style={{position: 'absolute', top: '2%', left: '2%'}}>Previsão mês</Typography>
                <SimpleBarChartWithoutSSR data={barChartData}/>
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  )
}
