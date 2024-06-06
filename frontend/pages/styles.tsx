import styled from "styled-components";

export const LogoWrapper = styled.div`
  margin: 10px;
  width: 60%;
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
  padding: 20px 50px 50px 50px;
  background: #e6edf5;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: end;
  width: 99%;
  height: 70px;
  margin: 20px 0px;
  background: white;
  border-radius: 15px;
  padding: 10px;
  position: relative;
`;

export const LeftGraphsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const RightGraphsWrapper = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  margin: 20px 0px;
`;

const Styles = () => {};

export default Styles;
