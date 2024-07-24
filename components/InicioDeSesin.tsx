import React, { memo } from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";

export type InicioDeSesinType = {
  style?: StyleProp<ViewStyle>;
};

const InicioDeSesin = memo(({ style }: InicioDeSesinType) => {
  return <Text style={[styles.inicioDeSesin, style]}>Inicio de Sesión</Text>;
});

const styles = StyleSheet.create({
  inicioDeSesin: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: "Roboto-Regular",
    color: "#76abae",
    textAlign: "left",
  },
});

export default InicioDeSesin;
