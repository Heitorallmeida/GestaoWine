"use client";

import { Input, Typography } from "@mui/material";
import WineBarIcon from "@mui/icons-material/WineBar";
import { useData } from "../hooks/useData";

import Layout from "./layout";
import dynamic from "next/dynamic";
import * as S from "./styles";

const SimpleBarChartWithoutSSR = dynamic(import("../components/barchart"), {
  ssr: false,
});

const SimplePieChartWithoutSSR = dynamic(import("../components/pieChart"), {
  ssr: false,
});

const SimpleLinearChartWithoutSSR = dynamic(
  import("../components/linearChart"),
  { ssr: false }
);

export default function Home() {
  const useDataHook = useData();

  return (
    <Layout>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          <WineBarIcon color="primary" style={{ width: 200, height: 60 }} />
        </S.LogoWrapper>
        <S.TitleWrapper>
          <Typography fontWeight={400} color="#23306A" variant="h5">
            Gerenciando sua loja: <br />
            superando os desafios do seu negócio
          </Typography>
        </S.TitleWrapper>
      </S.HeaderWrapper>
      <S.MainContainer>
        <S.InputWrapper>
          <Typography
            fontWeight={400}
            color="#23306A"
            variant="h6"
            style={{ position: "absolute", top: "2%", left: "10px" }}
          >
            Número de dias para previsão de venda
          </Typography>
          <Input
            placeholder="Numero de dias"
            style={{ width: "100%" }}
            name="numberOfDays"
            onChange={(event) => {
              if (
                Number(event.target.value) <= 0 &&
                event.target.value !== ""
              ) {
                window.alert("O número de dias não pode ser menor ou igual 0");
              } else if (Number(event.target.value) >= 120) {
                window.alert("O número de dias não pode ser maior que 120");
              } else {
                useDataHook.setNumberOfDays(Number(event.target.value));
              }
            }}
          />
        </S.InputWrapper>
        <S.LeftGraphsWrapper>
          <S.PieChartWrapper>
            <Typography
              fontWeight={400}
              color="#23306A"
              variant="h6"
              style={{ position: "absolute", top: "2%", left: "5%" }}
            >
              Acuracia
            </Typography>
            <SimplePieChartWithoutSSR data={useDataHook.pieChartData} />
            <Typography
              fontWeight={400}
              color="#23306A"
              variant="h6"
              style={{ position: "absolute", bottom: "35%" }}
            >
              {useDataHook.pieChartData}
            </Typography>
          </S.PieChartWrapper>
          <div
            style={{
              width: "70%",
              display: "flex",
              height: "336px",
              background: "white",
              borderRadius: "15px",
              alignItems: "end",
              position: "relative",
            }}
          >
            <Typography
              fontWeight={400}
              color="#23306A"
              variant="h6"
              style={{ position: "absolute", top: "2%", left: "2%" }}
            >
              Previsão dia
            </Typography>
            <SimpleLinearChartWithoutSSR data={useDataHook.linearChart} />
          </div>
        </S.LeftGraphsWrapper>
        <S.RightGraphsWrapper>
          <div
            suppressHydrationWarning
            style={{
              display: "flex",
              width: "100%",
              height: "336px",
              background: "white",
              borderRadius: "15px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Typography
              fontWeight={400}
              color="#23306A"
              variant="h6"
              style={{ position: "absolute", top: "2%", left: "2%" }}
            >
              Previsão mês
            </Typography>
            <SimpleBarChartWithoutSSR data={useDataHook.barChartData} />
          </div>
        </S.RightGraphsWrapper>
      </S.MainContainer>
    </Layout>
  );
}
