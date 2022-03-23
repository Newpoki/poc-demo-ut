import styled from "styled-components";
import * as StyledApp from "./App.styles";

export const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto 20px;
`;

export const Main = styled.div`
  margin-bottom: 20px;

  ${StyledApp.Button} {
    width: 110px;
  }
`;

export const Below = styled.div`
  display: flex;
  justify-content: center;
`;
