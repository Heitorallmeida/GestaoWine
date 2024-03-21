import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./layout";

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
        <div>Teste</div>
      </Layout>
    </ThemeProvider>
  )
}
