'use client'
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Layout from "./layout";
import Image from 'next/image'
import dynamic from "next/dynamic"
import * as S from './styles';


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
    const theme = createTheme({
        palette: {
          primary: {
            main: '#000000',
          },
          secondary: {
            main: '#FFFFFF',
          },
        },
      });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <S.Wrapper>
          <S.LogoWrapper>
            <Image alt='logo' width={300} height={60} src='/gasGest.svg' />
          </S.LogoWrapper>
          <div style={{width: '50%', justifyContent: 'end', display: 'flex', marginRight: '80px'}}>
            <Typography fontWeight={400} color='#23306A' variant='h5'>Gerenciando sua loja: <br/>superando os desafios do seu negócio</Typography>
          </div>
        </S.Wrapper>
        <div style={{padding: '50px', background: '#E6EDF5'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '20px'}}>
            <S.PieChartWrapper>
              <SimplePieChartWithoutSSR />
              <Typography fontWeight={400} color='#23306A' variant='h6' style={{position: 'absolute', bottom: '15%'}}>75%</Typography>
            </S.PieChartWrapper>
            <div style={{width: '70%', display: 'flex', height: '336px', background: 'white', borderRadius: '15px', alignItems: 'end'}}>
              <SimpleLinearChartWithoutSSR />
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'end', width: '100%', margin: '20px 0px'}}>
            <div suppressHydrationWarning style={{display: 'flex', width: '100%', height: '336px', background: 'white', borderRadius: '15px', justifyContent: 'center', alignItems: 'center'}}>
                <SimpleBarChartWithoutSSR />
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  )
}
