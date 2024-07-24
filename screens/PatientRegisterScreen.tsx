import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PatientRegisterScreen = () => {
  return (
    <View
      style={[styles.patientRegisterScreen1, styles.loginBackgroundA1FlexBox]}
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
            >{`Acepto que está aplicación almacene y use mis datos según indican los Terminos y Condiciones de Uso. `}</Text>
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
            >{`Acepto que las consultas médicas sean realizadas mediante una vídeo llamada según indican los Terminos y Condiciones de Uso. `}</Text>
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
                <View style={[styles.container3, styles.containerFlexBox]}>
                  <View
                    style={[styles.stateLayer3, styles.stateFrameSpaceBlock]}
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
                    style={[styles.stateLayer3, styles.stateFrameSpaceBlock]}
                  >
                    <Text style={[styles.labelText1, styles.labelTypo]}>
                      Email
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.segment2, styles.segmentFlexBox]}>
                <View style={[styles.container5, styles.containerFlexBox]}>
                  <View
                    style={[styles.stateLayer3, styles.stateFrameSpaceBlock]}
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
            <View style={[styles.stateLayer6, styles.stateFrameSpaceBlock]}>
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
    paddingVertical: 10,
    justifyContent: "center",
  },
  radioButtonsFlexBox: {
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlexBox1: {
    borderRadius: 100,
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
    paddingHorizontal: 5,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
  },
  containerFlexBox: {
    borderWidth: 1,
    borderColor: "#76abae",
    borderStyle: "solid",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  segmentFlexBox: {
    paddingVertical: 4,
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
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  registroDeUsuario: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    color: "#76abae",
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: 8,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
  },
  radioButtons: {
    width: 48,
  },
  aceptoLosTrminos: {
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16,
    color: "#b3b3b3",
    marginLeft: 5,
    fontFamily: "Roboto-Medium",
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
    paddingVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  loginButtonFrame: {
    height: 88,
    marginTop: 20,
    alignSelf: "stretch",
  },
  crearUsuarioCon: {
    color: "#c1c1c1",
    display: "flex",
    width: 168,
    height: 19,
    lineHeight: 24,
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    lineHeight: 24,
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0,
    color: "#76abae",
  },
  stateLayer3: {
    paddingHorizontal: 12,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  container3: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  labelText1: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
    color: "#76abae",
  },
  segment2: {
    marginLeft: -1,
  },
  container5: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  segmentedButton: {
    width: 310,
    marginTop: 7,
  },
  registerSocialNetworkSet: {
    borderRadius: 10,
    backgroundColor: "#e9e9e9",
    width: 353,
    height: 90,
    paddingHorizontal: 21,
    paddingVertical: 6,
    alignItems: "center",
  },
  labelText3: {
    color: "#f5f5f5",
    lineHeight: 24,
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0,
  },
  stateLayer6: {
    paddingHorizontal: 24,
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
    backgroundColor: "#76abae",
    height: 24,
    marginTop: 20,
  },
  loginSocialNetworkFrame: {
    paddingTop: 100,
    paddingBottom: 50,
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
    paddingVertical: 10,
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
  patientRegisterScreen1: {
    backgroundColor: "#9ec6c4",
    width: "100%",
    height: 932,
    alignItems: "center",
    flex: 1,
  },
});

export default PatientRegisterScreen;