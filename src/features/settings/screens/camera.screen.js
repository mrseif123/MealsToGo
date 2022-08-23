import React, { useState, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  ButtonStyled,
  Container,
  CameraStyled,
  ButtonCotainer,
} from "../components/settings.styles";

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const cameraRef = React.useRef(null);

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      await AsyncStorage.setItem(`@photo-${user.uid}`, photo.uri);
      navigation.goBack();
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <Container>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </Container>
    );
  }

  return (
    <Container>
      <CameraStyled type={type} ref={(camera) => (cameraRef.current = camera)}>
        <ButtonCotainer>
          <ButtonStyled onPress={snap}>
            <Text style={styles.text}>Take Picture</Text>
          </ButtonStyled>
        </ButtonCotainer>
      </CameraStyled>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
