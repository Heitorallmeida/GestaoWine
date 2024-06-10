"use client";

import { Typography } from "@mui/material";
import Image from "next/image";

import Layout from "./layout";
import * as S from "./home.styles";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          <Image src={"/icon.png"} alt="icon" width={466} height={71} />
        </S.LogoWrapper>
        <S.TitleWrapper>
          <Typography fontWeight={400} color="#23306A" variant="h5">
            <strong>Prevendo suas proximas vendas: </strong>
            <br />
            Superando os desafios do seu negócio.
          </Typography>
        </S.TitleWrapper>
      </S.HeaderWrapper>
      <S.MainContainer>
        <S.LeftSection>
          <Typography
            fontWeight={600}
            color="#B84B7A"
            variant={"h6"}
            fontSize={20}
          >
            Conheça:
          </Typography>
          <Typography
            fontWeight={600}
            color="#141E32"
            variant={"h3"}
            fontSize={36}
          >
            Antecipe as demandas com
          </Typography>
          <Typography
            fontWeight={600}
            color="#B84B7A"
            variant={"h3"}
            fontSize={36}
          >
            Previsões de vendas precisas.
          </Typography>
          <Typography
            fontWeight={600}
            color="#141E32"
            variant={"h3"}
            fontSize={36}
          >
            precisas.
          </Typography>
          <Typography
            fontWeight={400}
            color="#969696"
            variant={"h3"}
            fontSize={12}
            maxWidth={500}
          >
            Quer aumentar as vendas e otimizar o estoque da sua loja? A
            SalesPredictor utiliza inteligência artificial e análise de dados
            avançada para fornecer previsões de vendas precisas, auxiliando em
            decisões estratégicas para o seu negócio.
          </Typography>
          <S.ButtonsWrapper>
            <S.RegisterButton
              variant={"contained"}
              onClick={() => router.push("/admin")}
            >
              Registrar
            </S.RegisterButton>
            <S.DemoButton
              fontWeight={500}
              color="#141E32"
              variant={"h3"}
              fontSize={20}
              onClick={() => router.push("/dashboard")}
            >
              Testar demo
            </S.DemoButton>
          </S.ButtonsWrapper>
        </S.LeftSection>
        <S.RightSection>
          <Image src={"/homeGraph.png"} alt="icon" width={560} height={369} />
        </S.RightSection>
      </S.MainContainer>
    </Layout>
  );
}
