import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  BackgroundContainer,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";
export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundContainer>
      <AccountCover />
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
