import React, { memo } from "react";
import {
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Image } from "expo-image";

export type LoginButtonFrameType = {
  style?: StyleProp<ViewStyle>;
};

const LoginButtonFrame = memo(({ style }: LoginButtonFrameType) => {
  return (
    <View style={[styles.loginButtonFrame, style]}>
      <TouchableHighlight
        style={[styles.button, styles.buttonLayout]}
        underlayColor="rgba(5, 87, 84, 0.7)"
        activeOpacity={0.7}
        onPress={() => {}}
      >
        <>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Text style={[styles.button1, styles.buttonFlexBox]}>
            Iniciar Sesión
          </Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/x1.png")}
          />
        </>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.button2, styles.buttonLayout]}
        underlayColor="rgba(214, 214, 214, 0.7)"
        activeOpacity={0.7}
        onPress={() => {}}
      >
        <>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <Text style={[styles.button3, styles.buttonFlexBox]}>
            Recordar Contraseña
          </Text>
          <Image
            style={[styles.xIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/x1.png")}
          />
        </>
      </TouchableHighlight>
    </View>
  );
});

const styles = StyleSheet.create({
  buttonLayout: {
    flex: 1,
    textAlign: "center",
    minWidth: 145,
    maxWidth: 370,
    padding: 8,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 9999,
    width: "100%",
    alignItems: "center",
  },
  buttonFlexBox: {
    textAlign: "center",
    fontFamily: "Inter-Regular",
    flex: 1,
  },
  iconLayout: {
    display: "none",
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  button1: {
    fontSize: 20,
    lineHeight: 20,
    color: "#f5f5f5",
  },
  button: {
    backgroundColor: "#76ABAE",
    justifyContent: "space-between",
    minHeight: 32,
    maxHeight: 32,
    color: "#FFFFFF",
  },
  button3: {
    fontSize: 14,
    lineHeight: 14,
    color: "#76abae",
    marginLeft: -16,
  },
  xIcon1: {
    marginLeft: -16,
  },
  button2: {
    backgroundColor: "#f1efef",
    borderStyle: "solid",
    borderColor: "#76ABAE",
    borderWidth: 1,
    minHeight: 24,
    maxHeight: 24,
    color: "#76ABAE",
    marginTop: 10,
    justifyContent: "center",
  },
  loginButtonFrame: {
    alignSelf: "stretch",
    paddingHorizontal: 100,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginButtonFrame;
