import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InicioDeSesin from "../components/InicioDeSesin";
import InputSelctFieldFrame from "../components/InputSelctFieldFrame";
import LoginButtonFrame from "../components/LoginButtonFrame";
import FrameComponent from "../components/FrameComponent";
import FooterFrame from "../components/FooterFrame";

const LoginScreen = () => {
  const [loginBackgroundA1Data, setLoginBackgroundA1Data] = useState([
    <InicioDeSesin />,
    <InputSelctFieldFrame />,
    <LoginButtonFrame />,
    <FrameComponent />,
    <FooterFrame />,
  ]);

  return (
    <View style={[styles.testLoginScreen1, styles.loginFlexBox]}>
      <Image
        style={styles.klinikappCollage1Icon}
        contentFit="contain"
        source={require("../assets/klinikapp-collage-1.png")}
      />
      <LinearGradient
        style={styles.spaceLogoFrame}
        locations={[0.09, 0.47, 0.7]}
        colors={["#76abae", "rgba(118, 171, 174, 0)", "rgba(118, 171, 174, 0)"]}
      >
        <Image
          style={styles.klinikappLogoNameIcon}
          contentFit="cover"
          source={require("../assets/klinikapp-logo-name.png")}
        />
      </LinearGradient>
      <FlatList
        style={[styles.loginBackgroundA1, styles.loginFlexBox]}
        data={loginBackgroundA1Data}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.loginBackgroundA1Content}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginBackgroundA1Content: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  loginFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  klinikappCollage1Icon: {
    position: "absolute",
    top: -654,
    left: -1,
    width: 430,
    height: 923,
    zIndex: 0,
  },
  klinikappLogoNameIcon: {
    width: 212,
    height: 57,
  },
  spaceLogoFrame: {
    height: 119,
    justifyContent: "flex-end",
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "transparent",
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginBackgroundA1: {
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: "#f1efef",
    zIndex: 2,
    alignSelf: "stretch",
  },
  testLoginScreen1: {
    backgroundColor: "#9ec6c4",
    width: "100%",
    height: 932,
    alignItems: "center",
  },
});

export default LoginScreen;