import React from "react";
import {
  BackgroundContainer,
  BackgroundContainerLogin,
  ErrorContainer,
  LoginButton,
} from "../components/account.styles";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { onLogin, error } = React.useContext(AuthenticationContext);

  return (
    <BackgroundContainer>
      <BackgroundContainerLogin>
        <TextInput
          selectionColor="tomato"
          underlineColor="tomato"
          activeUnderlineColor="tomato"
          style={{
            marginTop: 8,
            width: "80%",
            alignSelf: "center",
            borderRadius: 10,
          }}
          textContentType="emailAddress"
          keyboardType="email-address"
          label="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="medium">
          <TextInput
            selectionColor="tomato"
            underlineColor="tomato"
            activeUnderlineColor="tomato"
            style={{ width: "80%", alignSelf: "center", borderRadius: 10 }}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            label="Passwrod"
            secure
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text vartiants="error" style={{ color: "red", fontSize: 14 }}>
                {error}
              </Text>
            </ErrorContainer>
          </Spacer>
        )}
        <LoginButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {
            onLogin(email, password);
          }}
        ></LoginButton>
      </BackgroundContainerLogin>

      <Spacer size="large">
        <Button
          mode="contained"
          color="tomato"
          marginTop={300}
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </Spacer>
    </BackgroundContainer>
  );
};
