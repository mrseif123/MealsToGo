import styled from "styled-components/native";
import { View, StatusBar, SafeAreaView } from "react-native";
import { colors } from "../../infrastructure/theme/colors";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${colors.bg.secondary};
`;
