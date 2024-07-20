import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, Button } from "react-native-paper";
import FrameComponent from "../components/FrameComponent";
import {
  StyleVariable,
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const LoginScreen = () => {
  return (
    <View style={[styles.loginScreen1, styles.loginFlexBox]}>
      <Image
        style={styles.klinikappCollage1Icon}
        contentFit="cover"
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
      <View style={[styles.loginBackgroundA1, styles.loginFlexBox]}>
        <Text style={styles.inicioDeSesin}>Inicio de Sesión</Text>
        <View style={styles.inputSelctFieldFrame}>
          <TextInput
            style={styles.inputLayout}
            mode="outlined"
            placeholderTextColor="#b3b3b3"
            theme={{
              fonts: {
                regular: { fontFamily: "Roboto", fontWeight: "Regular" },
              },
              colors: { text: "#b3b3b3" },
            }}
          />
          <View style={[styles.passwordInputField, styles.inputLayout]}>
            <Text style={styles.label}>
              Ingresa tu correo electrónico registrado:
            </Text>
            <Text style={[styles.description, styles.errorTypo]}>
              Description
            </Text>
            <View style={[styles.input, styles.inputBorder]}>
              <Text style={[styles.value, styles.valueClr]}>
                Ingresa tu contraseña
              </Text>
            </View>
            <Text style={[styles.error, styles.errorTypo]}>Error</Text>
          </View>
        </View>
        <View style={[styles.loginButtonFrame, styles.frameSpaceBlock]}>
          <Button
            style={[styles.loginButtonA1, styles.buttonShadowBox]}
            mode="contained"
            labelStyle={styles.loginButtonA1Btn}
            contentStyle={styles.loginButtonA1Btn1}
          >
            Iniciar Sesión
          </Button>
          <Button
            style={[styles.recoveryPasswordButton, styles.buttonShadowBox]}
            mode="text"
            labelStyle={styles.recoveryPasswordButtonBtn}
            contentStyle={styles.recoveryPasswordButtonBtn1}
          >
            Recordar Contraseña
          </Button>
        </View>
        <FrameComponent />
        <View style={[styles.footerFrame, styles.frameSpaceBlock]}>
          <Image
            style={styles.logoCloudIceIcon}
            contentFit="cover"
            source={require("../assets/logo-cloud-ice1.png")}
          />
          <Text
            style={[styles.designedDeveloped, styles.valueClr]}
            numberOfLines={3}
          >{`Designed & Developed by The Cloud Solution LLC.
Marketed in the Republic of Chile by The Cloud Solution SpA.
Registered Trademark - All Rights Reserved.`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonA1Btn: {
    color: "#f5f5f5",
    fontSize: 22,
    fontFamily: "Roboto-Regular",
  },
  loginButtonA1Btn1: {
    borderRadius: 100,
    height: 40,
  },
  recoveryPasswordButtonBtn: {
    color: "#76abae",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
  },
  recoveryPasswordButtonBtn1: {
    borderRadius: 100,
    height: 24,
  },
  loginFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  inputLayout: {
    borderRadius: StyleVariable.cornerFull,
    alignSelf: "stretch",
  },
  errorTypo: {
    fontFamily: FontFamily.bodyBase,
    lineHeight: 22,
    marginTop: 8,
    display: "none",
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
  },
  inputBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  valueClr: {
    color: Color.textDefaultTertiary,
    letterSpacing: 1,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    marginTop: 20,
    justifyContent: "center",
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(12, 12, 13, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  inicioDeSesin: {
    fontSize: FontSize.m3HeadlineMedium_size,
    lineHeight: 36,
    color: Color.greenA1,
    textAlign: "left",
    fontFamily: FontFamily.m3BodyLarge,
  },
  label: {
    letterSpacing: 0,
    color: Color.gRAY88,
    display: "none",
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    marginTop: 8,
    alignSelf: "stretch",
  },
  value: {
    color: Color.textDefaultTertiary,
    letterSpacing: 1,
    lineHeight: 24,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.m3BodyLarge,
    flex: 1,
  },
  input: {
    borderRadius: StyleVariable.radiusFull,
    backgroundColor: Color.backgroundDefaultDefault,
    borderColor: Color.borderDefaultDefault,
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  error: {
    color: Color.textDefaultDefault,
    marginTop: 8,
  },
  passwordInputField: {
    marginTop: 20,
  },
  inputSelctFieldFrame: {
    padding: Padding.p_3xs,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginButtonA1: {
    shadowRadius: 32,
    elevation: 32,
  },
  recoveryPasswordButton: {
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.greenA1,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
  },
  loginButtonFrame: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  logoCloudIceIcon: {
    width: 130,
    height: 21,
  },
  designedDeveloped: {
    fontSize: 7,
    lineHeight: 12,
    display: "flex",
    width: 225,
    marginLeft: 20,
    alignItems: "flex-end",
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    color: Color.textDefaultTertiary,
    letterSpacing: 1,
    overflow: "hidden",
  },
  footerFrame: {
    width: 390,
    flexWrap: "wrap",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  loginBackgroundA1: {
    borderTopLeftRadius: Border.br_14xl,
    borderTopRightRadius: Border.br_14xl,
    backgroundColor: Color.backgroundWhite,
    height: 813,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    zIndex: 2,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginScreen1: {
    backgroundColor: Color.greenA2,
    width: "100%",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
});

export default LoginScreen;
