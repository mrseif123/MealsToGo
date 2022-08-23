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
import { ActivityIndicator, Colors } from "react-native-paper";
import {colors } from "../../../infrastructure/theme/colors";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatedPassword, setRepeatedPassword] = React.useState("");
  const { onRegister, error, loading } = React.useContext(
    AuthenticationContext
  );
  return (
    <BackgroundContainer>
      <BackgroundContainerLogin>
        <TextInput

          style={{
            marginTop: 10,
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

            style={{ width: "80%", alignSelf: "center", borderRadius: 10 }}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            label="Passwrod"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        <Spacer size="medium">
          <TextInput

            style={{ width: "80%", alignSelf: "center", borderRadius: 10 }}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            label="Repeat Passwrod"
            value={repeatedPassword}
            onChangeText={(text) => setRepeatedPassword(text)}
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
        {loading ? (
          <ActivityIndicator
            style={{ marginBottom: 10, marginTop: 10 }}
            animating={true}
            color={Colors.red800}
          />
        ) : (
          <LoginButton
            icon="email"
            mode="contained"
            onPress={() => {
              onRegister(email, password, repeatedPassword);
            }}
          >
            Register
          </LoginButton>
        )}
      </BackgroundContainerLogin>

      <Spacer size="large">
        <Button
          mode="contained"
          color={colors.brand.muted}
          marginTop={400}
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </Spacer>
    </BackgroundContainer>
  );
};
