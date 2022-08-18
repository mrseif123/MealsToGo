import { Card } from "react-native-paper";
import styled from "styled-components";
import { Image } from "react-native";

export const RestaurantCard = styled(Card)`
  height: 300px;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const RatingAndInfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantInfoIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;
