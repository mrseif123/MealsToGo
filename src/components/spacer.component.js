import React from "react";
import styled from "styled-components";
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const positionIndex = positionVariant[position];
  const value = theme.space[sizeIndex];
  `${positionIndex}:${value}`;
};

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

Spacer.defualtProps = {
  position: "top",
  size: "small",
};
