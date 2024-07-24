import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputFieldFrame from "../components/InputFieldFrame";

const ProfileSelectScreen = () => {
  return (
    <View style={styles.profileSelectScreen1}>
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
      <View style={styles.loginBackgroundA1}>
        <Text style={styles.seleccionaTuPerfil}>Selecciona tu perfil</Text>
        <InputFieldFrame />
        <View style={[styles.loginButtonFrame, styles.loginFrameSpaceBlock]} />
        <View
          style={[styles.loginSocialNetworkFrame, styles.loginFrameSpaceBlock]}
        >
          <View style={styles.loginSocialNetworkSet}>
            <Text style={[styles.iniciaSesinCon, styles.labelTypo]}>
              Inicia sesión con:
            </Text>
            <View style={styles.segmentedButton}>
              <View style={styles.segmentFlexBox}>
                <View style={[styles.container, styles.containerFlexBox]}>
                  <View style={[styles.stateLayer, styles.stateFlexBox]}>
                    <Text style={[styles.labelText, styles.labelTypo]}>
                      Google
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.segmentEnd, styles.segmentFlexBox]}>
                <View style={[styles.container1, styles.containerFlexBox]}>
                  <View style={[styles.stateLayer, styles.stateFlexBox]}>
                    <Text style={[styles.labelText, styles.labelTypo]}>
                      Facebook
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.loginButtonA2, styles.loginFrameSpaceBlock]}>
            <View style={[styles.stateLayer2, styles.stateFlexBox]}>
              <Text style={[styles.labelText2, styles.labelTypo]}>
                ¿Estás registrado? Inicia Sesión aquí
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.footerFrame, styles.stateFlexBox]}>
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
  frameFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  loginFrameSpaceBlock: {
    marginTop: 20,
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16,
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
  stateFlexBox: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  segmentFlexBox: {
    paddingVertical: 4,
    paddingHorizontal: 0,
    flexDirection: "row",
    height: 48,
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
    alignItems: "center",
  },
  seleccionaTuPerfil: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    color: "#76abae",
  },
  loginButtonFrame: {
    height: 64,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  iniciaSesinCon: {
    color: "#b3b3b3",
    display: "flex",
    width: 168,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    color: "#76abae",
  },
  stateLayer: {
    paddingHorizontal: 12,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  container: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  container1: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  segmentEnd: {
    marginLeft: -1,
  },
  segmentedButton: {
    width: 207,
    marginTop: 7,
    flexDirection: "row",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  loginSocialNetworkSet: {
    borderRadius: 10,
    backgroundColor: "#e9e9e9",
    width: 300,
    height: 90,
    paddingHorizontal: 15,
    paddingVertical: 6,
    alignItems: "center",
  },
  labelText2: {
    color: "#f5f5f5",
  },
  stateLayer2: {
    paddingHorizontal: 24,
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
    borderRadius: 100,
    backgroundColor: "#76abae",
    height: 24,
    justifyContent: "center",
    overflow: "hidden",
  },
  loginSocialNetworkFrame: {
    paddingTop: 100,
    paddingBottom: 50,
    justifyContent: "flex-end",
    alignSelf: "stretch",
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
    paddingVertical: 10,
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
    overflow: "hidden",
  },
  profileSelectScreen1: {
    backgroundColor: "#9ec6c4",
    width: "100%",
    height: 932,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ProfileSelectScreen;