'use client'
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Layout from "./layout";
import Image from 'next/image'
import dynamic from "next/dynamic"


const SimpleBarChartWithoutSSR = dynamic(
  import("../components/barchart"),
  { ssr: false }
);

const SimplePieChartWithoutSSR = dynamic(
  import("../components/pieChart"),
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
        <div style={{height: '260px', background: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '50px'}}>
          <div style={{margin: '20px', width: '60%', }}>
          <Image alt='logo' width={300} height={60} src='/gasGest.svg' />
          </div>
          <div style={{width: '50%', justifySelf: 'end', display: 'flex', marginLeft: '40px'}}>
            <Typography fontWeight={400} color='#23306A' variant='h5'>Conquistando a estilização perfeita: superando os desafios do seu Dashboard</Typography>
          </div>
        </div>
        <div style={{padding: '50px', background: '#E6EDF5'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', gap: '20px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%', height: '336px', background: 'white', borderRadius: '15px'}}><SimplePieChartWithoutSSR /></div>
            <div style={{width: '70%', height: '336px', background: 'white', borderRadius: '15px'}}></div>
          </div>
          <div style={{display: 'flex', width: '100%', margin: '20px 0px'}}>
            <div suppressHydrationWarning style={{display: 'flex', width: '100%', height: '336px', background: 'white', borderRadius: '15px', justifyContent: 'center', alignItems: 'center'}}>
                <SimpleBarChartWithoutSSR />
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  )
}
