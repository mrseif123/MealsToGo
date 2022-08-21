import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  BackgroundContainer,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";
export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundContainer>
      <AccountCover />
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
            icon="lock-open-outline"
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
