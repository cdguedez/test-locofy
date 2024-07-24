import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    display: "none",
    fontSize: 16,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingHorizontal: 0,
    marginTop: 20,
  },
  stateLayerFlexBox: {
    paddingVertical: 10,
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
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "transparent",
    zIndex: 1,
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  recuperarContrasea: {
    fontSize: 28,
    lineHeight: 36,
    color: "#76abae",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  label: {
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#888",
    display: "none",
    lineHeight: 24,
    fontSize: 16,
    textAlign: "left",
    alignSelf: "stretch",
  },
  description: {
    color: "#757575",
    alignSelf: "stretch",
  },
  value: {
    letterSpacing: 1,
    color: "#b3b3b3",
    lineHeight: 24,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    flex: 1,
  },
  input: {
    borderRadius: 9999,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 240,
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  error: {
    color: "#1e1e1e",
  },
  emailPasswordRecoveryInput: {
    borderRadius: 1000,
    alignSelf: "stretch",
  },
  inputSelctFieldFrame: {
    padding: 10,
    justifyContent: "center",
  },
  labelText: {
    fontSize: 22,
    lineHeight: 28,
    color: "#f5f5f5",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
  stateLayer: {
    paddingHorizontal: 24,
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
    borderRadius: 100,
    backgroundColor: "#76abae",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonFrame: {
    paddingVertical: 20,
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
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: "#f1efef",
    height: 813,
    paddingHorizontal: 20,
    paddingVertical: 13,
    zIndex: 2,
    alignSelf: "stretch",
    alignItems: "center",
  },
  forgotPasswordScreen1: {
    backgroundColor: "#9ec6c4",
    width: "100%",
    height: 932,
    alignItems: "center",
    flex: 1,
  },
});

export default ForgotPasswordScreen;