import styled from "styled-components";

import * as StyledApp from "./App.styles";

export const Root = styled.div`
  display: flex;
  justify-content: center;

  ${StyledApp.Button} {
    width: 110px;
  }
`;
