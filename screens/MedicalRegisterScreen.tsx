import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const MedicalRegisterScreen = () => {
  return (
    <View
      style={[styles.medicalRegisterScreen1, styles.loginBackgroundA1FlexBox]}
    >
      <Image
        style={styles.klinikappCollage1Icon}
        contentFit="cover"
        source={require("../assets/klinikapp-collage-1.png")}
      />
      <LinearGradient
        style={[styles.spaceLogoFrame, styles.frameFlexBox]}
        locations={[0.09, 0.47, 0.7]}
        colors={["#76abae", "rgba(118, 171, 174, 0)", "rgba(118, 171, 174, 0)"]}
      >
        <Image
          style={styles.klinikappLogoNameIcon}
          contentFit="cover"
          source={require("../assets/klinikapp-logo-name.png")}
        />
      </LinearGradient>
      <View style={[styles.loginBackgroundA1, styles.loginBackgroundA1FlexBox]}>
        <Text style={styles.registroDeUsuario}>Registro de Usuario</Text>
        <View
          style={[styles.inputSelctFieldFrame, styles.stateFrameSpaceBlock]}
        >
          <View style={styles.radioFrameFlexBox}>
            <View style={[styles.radioButtons, styles.radioButtonsFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox1]}>
                <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/icon.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.aceptoLosTrminos}>
              Acepto los Términos y Condiciones de Uso y confirmo que soy mayor
              de 18 años de edad.
            </Text>
          </View>
          <View style={[styles.radioButtonFrame1, styles.radioFrameFlexBox]}>
            <View style={[styles.radioButtons, styles.radioButtonsFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox1]}>
                <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/icon.png")}
                  />
                </View>
              </View>
            </View>
            <Text
              style={styles.aceptoLosTrminos}
            >{`Acepto que está aplicación almacene y use mis datos profesionales para verificación legal según indican los Terminos y Condiciones de Uso. `}</Text>
          </View>
        </View>
        <View style={[styles.loginButtonFrame, styles.stateLayerFlexBox]} />
        <View style={[styles.loginSocialNetworkFrame, styles.frameFlexBox]}>
          <View style={styles.registerSocialNetworkSet}>
            <Text style={[styles.crearUsuarioCon, styles.labelTypo]}>
              Crear usuario con:
            </Text>
            <View style={[styles.segmentedButton, styles.radioButtonsFlexBox]}>
              <View style={styles.segmentFlexBox}>
                <View style={[styles.container2, styles.containerFlexBox]}>
                  <View
                    style={[styles.stateLayer2, styles.stateFrameSpaceBlock]}
                  >
                    <Text style={[styles.labelText, styles.labelTypo]}>
                      Google
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.segment2, styles.segmentFlexBox]}>
                <View style={styles.containerFlexBox}>
                  <View
                    style={[styles.stateLayer2, styles.stateFrameSpaceBlock]}
                  >
                    <Text style={[styles.labelText1, styles.labelTypo]}>
                      Email
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.segment2, styles.segmentFlexBox]}>
                <View style={[styles.container4, styles.containerFlexBox]}>
                  <View
                    style={[styles.stateLayer2, styles.stateFrameSpaceBlock]}
                  >
                    <Text style={[styles.labelText, styles.labelTypo]}>
                      Facebook
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.loginButtonA2, styles.containerFlexBox1]}>
            <View style={[styles.stateLayer5, styles.stateFrameSpaceBlock]}>
              <Text style={[styles.labelText3, styles.labelTypo]}>
                ¿Estás registrado? Inicia Sesión aquí
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.footerFrame, styles.stateFrameSpaceBlock]}>
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
  loginBackgroundA1FlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  stateFrameSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
  },
  radioButtonsFlexBox: {
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlexBox1: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioFrameFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
  },
  containerFlexBox: {
    borderWidth: 1,
    borderColor: Color.greenA1,
    borderStyle: "solid",
    backgroundColor: Color.wHITEF5,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  segmentFlexBox: {
    paddingVertical: Padding.p_9xs,
    height: 48,
    flexDirection: "row",
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
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
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  registroDeUsuario: {
    fontSize: FontSize.m3HeadlineMedium_size,
    lineHeight: 36,
    fontFamily: FontFamily.m3TitleLarge,
    textAlign: "left",
    color: Color.greenA1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
  },
  radioButtons: {
    width: 48,
  },
  aceptoLosTrminos: {
    fontSize: FontSize.m3LabelMedium_size,
    letterSpacing: 1,
    lineHeight: 16,
    color: Color.textDefaultTertiary,
    marginLeft: 5,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
  radioButtonFrame1: {
    marginTop: 10,
  },
  inputSelctFieldFrame: {
    marginTop: 20,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginButtonFrame: {
    height: 164,
    marginTop: 20,
    alignSelf: "stretch",
  },
  crearUsuarioCon: {
    color: Color.gRAYC1,
    display: "flex",
    width: 168,
    height: 19,
    lineHeight: 24,
    fontSize: FontSize.bodyBase_size,
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    lineHeight: 24,
    fontSize: FontSize.bodyBase_size,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.greenA1,
  },
  stateLayer2: {
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  container2: {
    borderTopLeftRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
  },
  labelText1: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.greenA1,
  },
  segment2: {
    marginLeft: -1,
  },
  container4: {
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
  },
  segmentedButton: {
    width: 310,
    marginTop: 7,
  },
  registerSocialNetworkSet: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundGreyA1,
    width: 353,
    height: 90,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
  },
  labelText3: {
    color: Color.wHITEF5,
    lineHeight: 24,
    fontSize: FontSize.bodyBase_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  stateLayer5: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  loginButtonA2: {
    shadowColor: "rgba(12, 12, 13, 0.1)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 32,
    elevation: 32,
    shadowOpacity: 1,
    backgroundColor: Color.greenA1,
    height: 24,
    marginTop: 20,
  },
  loginSocialNetworkFrame: {
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_31xl,
    marginTop: 20,
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
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
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
  medicalRegisterScreen1: {
    backgroundColor: Color.greenA2,
    width: "100%",
    height: 932,
    alignItems: "center",
    flex: 1,
  },
});

export default MedicalRegisterScreen;