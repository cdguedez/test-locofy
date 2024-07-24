import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontFamily,
  FontSize,
  Padding,
  Color,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const ForgotPasswordScreen = () => {
  return (
    <View style={[styles.forgotPasswordScreen1, styles.passwordFlexBox]}>
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
      <View style={[styles.loginBackgroundA1, styles.passwordFlexBox]}>
        <Text style={styles.recuperarContrasea}>Recuperar Contraseña</Text>
        <View style={[styles.inputSelctFieldFrame, styles.frameFlexBox]}>
          <View style={styles.emailPasswordRecoveryInput}>
            <Text style={styles.label}>
              Ingresa tu correo electrónico registrado:
            </Text>
            <Text style={[styles.description, styles.errorTypo]}>
              Description
            </Text>
            <View style={styles.input}>
              <Text style={styles.value}>
                Ingresa tu correo electrónico registrado
              </Text>
            </View>
            <Text style={[styles.error, styles.errorTypo]}>Error</Text>
          </View>
        </View>
        <View style={[styles.loginButtonFrame, styles.frameSpaceBlock]}>
          <View style={[styles.recoveryPasswordButton, styles.passwordFlexBox]}>
            <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
              <Text style={styles.labelText}>Recuperar</Text>
            </View>
          </View>
        </View>
        <View style={[styles.loginSocialNetworkFrame, styles.frameFlexBox]} />
        <View style={[styles.footerFrame, styles.stateLayerFlexBox]}>
          <Image
            style={styles.logoCloudIceIcon}
            contentFit="cover"
            source={require("../assets/logo-cloud-ice.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  frameFlexBox: {
    marginTop: 20,
    alignSelf: "stretch",
    alignItems: "center",
  },
  errorTypo: {
    marginTop: 8,
    fontFamily: FontFamily.bodyBase,
    lineHeight: 22,
    display: "none",
    fontSize: FontSize.bodyBase_size,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingHorizontal: 0,
    marginTop: 20,
  },
  stateLayerFlexBox: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
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
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
    zIndex: 1,
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  recuperarContrasea: {
    fontSize: FontSize.m3HeadlineMedium_size,
    lineHeight: 36,
    color: Color.greenA1,
    textAlign: "left",
    fontFamily: FontFamily.m3TitleLarge,
  },
  label: {
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.gRAY88,
    display: "none",
    lineHeight: 24,
    fontSize: FontSize.bodyBase_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    alignSelf: "stretch",
  },
  value: {
    letterSpacing: 1,
    color: Color.textDefaultTertiary,
    lineHeight: 24,
    fontSize: FontSize.bodyBase_size,
    textAlign: "left",
    fontFamily: FontFamily.m3TitleLarge,
    flex: 1,
  },
  input: {
    borderRadius: StyleVariable.radiusFull,
    backgroundColor: Color.backgroundDefaultDefault,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
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
  },
  emailPasswordRecoveryInput: {
    borderRadius: StyleVariable.cornerFull,
    alignSelf: "stretch",
  },
  inputSelctFieldFrame: {
    padding: Padding.p_3xs,
    justifyContent: "center",
  },
  labelText: {
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    color: Color.wHITEF5,
    textAlign: "center",
    fontFamily: FontFamily.m3TitleLarge,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  recoveryPasswordButton: {
    shadowColor: "rgba(12, 12, 13, 0.1)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 32,
    elevation: 32,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.greenA1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonFrame: {
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginSocialNetworkFrame: {
    justifyContent: "flex-end",
    flex: 1,
  },
  logoCloudIceIcon: {
    width: 130,
    height: 21,
  },
  footerFrame: {
    width: 390,
    flexWrap: "wrap",
    alignItems: "flex-end",
    paddingHorizontal: 0,
    marginTop: 20,
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
  forgotPasswordScreen1: {
    backgroundColor: Color.greenA2,
    width: "100%",
    height: 932,
    alignItems: "center",
    flex: 1,
  },
});

export default ForgotPasswordScreen;