import { Animated } from "react-native";
import React, { useRef, useEffect } from "react";

export const FadeInView = ({ duration = 1500, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);
  return (
    <Animated.View {...props} style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};
