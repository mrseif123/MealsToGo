import styled from "styled-components/native";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { SafeArea } from "../../../components/utility/safeArea.component";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
export const AvatarContainer = styled.View`
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonCotainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: transparent;
  margin: 64px;
`;

export const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
  `;

export const ButtonStyled = styled(TouchableOpacity)`
  flex: 1;
  align-self: flex-end;
  align-items: center;
`;

export const CameraStyled = styled(Camera)`
  flex: 1;
`;

export const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;