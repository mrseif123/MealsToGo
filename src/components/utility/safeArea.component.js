import styled from "styled-components/native";
import { View, StatusBar } from "react-native";

export const SafeArea = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;
