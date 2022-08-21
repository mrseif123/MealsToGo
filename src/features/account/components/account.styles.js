import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";

export const BackgroundContainer = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundContainerLogin = styled.View`
  position: absolute;
  width: 80%;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.3);
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

export const LoginButton = styled(Button).attrs({
  color: "tomato",
})`
  padding: ${(props) => props.theme.space[2]};
  width: 70%;
  align-self: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 70px;
  padding: ${(props) => props.theme.space[1]};
  z-index: 2;
`;
