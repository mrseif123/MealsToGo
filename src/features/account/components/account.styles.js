import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
export const BackgroundContainer = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  alig-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: "tomato",
})`
  padding: ${(props) => props.theme.space[2]};
`;
