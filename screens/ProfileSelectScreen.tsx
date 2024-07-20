import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InputFieldFrame from "../components/InputFieldFrame";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

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
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
  },
  containerFlexBox: {
    borderWidth: 1,
    borderColor: Color.greenA1,
    borderStyle: "solid",
    backgroundColor: Color.whiteA1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  stateFlexBox: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  segmentFlexBox: {
    paddingVertical: Padding.p_9xs,
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
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
    zIndex: 1,
    alignItems: "center",
  },
  seleccionaTuPerfil: {
    fontSize: FontSize.m3HeadlineMedium_size,
    lineHeight: 36,
    fontFamily: FontFamily.m3BodyLarge,
    textAlign: "left",
    color: Color.greenA1,
  },
  loginButtonFrame: {
    height: 64,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  iniciaSesinCon: {
    color: Color.textDefaultTertiary,
    display: "flex",
    width: 168,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    color: Color.greenA1,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  container: {
    borderTopLeftRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
  },
  container1: {
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundGreyA1,
    width: 300,
    height: 90,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
  },
  labelText2: {
    color: Color.whiteA1,
  },
  stateLayer2: {
    paddingHorizontal: Padding.p_5xl,
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
    borderRadius: Border.br_81xl,
    backgroundColor: Color.greenA1,
    height: 24,
    justifyContent: "center",
    overflow: "hidden",
  },
  loginSocialNetworkFrame: {
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_31xl,
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
    paddingVertical: Padding.p_3xs,
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
    overflow: "hidden",
  },
  profileSelectScreen1: {
    backgroundColor: Color.greenA2,
    width: "100%",
    height: 932,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ProfileSelectScreen;
