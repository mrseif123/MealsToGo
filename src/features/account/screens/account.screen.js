import React from "react";
import LottiView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  BackgroundContainer,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import styled from "styled-components";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundContainer>
      <AccountCover />
      <AnimationWrapper>
        <LottiView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          LOGIN
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </BackgroundContainer>
  );
};
