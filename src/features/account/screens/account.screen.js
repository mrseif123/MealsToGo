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
import { Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

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
        <Button
          buttonStyle={{ backgroundColor: colors.brand.primary, width: 140 }}
          icon={
            <Entypo
              name="lock"
              size={24}
              color="white"
              style={{ paddingRight: 10 }}
            />
          }
          mode="contained"
          onPress={() => {
            navigation.navigate("Login");
          }}
          title="Login"
        >
          LOGIN
        </Button>
        <Spacer size="large">
          <Button
            icon={
              <Entypo
                name="mail"
                size={24}
                color="white"
                style={{ paddingRight: 10 }}
              />
            }
            mode="contained"
            onPress={() => {
              navigation.navigate("Register");
            }}
            title="Register"
            buttonStyle={{ backgroundColor: colors.brand.primary, width: 140 }}
          >
            Register
          </Button>
        </Spacer>
      </AccountContainer>
    </BackgroundContainer>
  );
};
