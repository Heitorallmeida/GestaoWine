import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const LogoWrapper = styled.div`
  margin: 10px;
  width: 60%;
  margin-left: 50px;
`;

export const HeaderWrapper = styled.div`
  height: 150px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 2px 2px 2px black;
`;

export const PieChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 336px;
  background: white;
  border-radius: 15px;
  position: relative;
`;

export const TitleWrapper = styled.div`
  width: 50%;
  justify-content: end;
  display: flex;
  margin-right: 80px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 50px 50px 50px;
  background: #e6edf5;
  height: calc(100vh - 150px);
  justify-content: start;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 60%;
  gap: 5px;
  height: 100%;
  margin-top: 100px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: start;
  width: 40%;
  margin: 20px 0px;
  margin-top: 100px;
  height: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

export const RegisterButton = styled(Button)`
  background-color: #b84b7a;
  &:hover {
    background-color: #b84b7a;
  }
`;

export const DemoButton = styled(Typography)`
  &:hover {
    cursor: pointer;
  }
`;

const Styles = () => {};

export default Styles;
