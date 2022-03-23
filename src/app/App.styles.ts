import styled from "styled-components";
import { Button as BaseButton } from "../components/Button";

export const Input = styled.input`
  font-size: 20px;
  padding: 12px;
  border: none;
  box-sizing: border-box;
`;

export const Button = styled(BaseButton)`
  padding: 12px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: 0.18s;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const Root = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%); */
  background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);

  ${Button} {
    padding: 12px;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: 0.18s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const TabsWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  width: 100%;
`;

export const Tabs = styled(Button)`
  padding: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 500;
  transition: 0.18s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &[aria-pressed="true"] {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const TabsViewWrapper = styled.div`
  margin-top: 24px;
`;
