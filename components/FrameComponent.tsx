import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import StyleFilledStateEnabledS from "./StyleFilledStateEnabledS";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const FrameComponent = memo(() => {
  return (
    <View style={[styles.loginSocialNetworkFrame, styles.loginSpaceBlock]}>
      <Pressable style={[styles.button, styles.buttonFlexBox]}>
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={styles.button1}>Button</Text>
        <Image
          style={[styles.xIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/x.png")}
        />
      </Pressable>
      <View style={[styles.loginSocialNetworkSet, styles.loginSpaceBlock]}>
        <Text style={[styles.iniciaSesinCon, styles.labelTextTypo]}>
          Inicia sesión con:
        </Text>
        <View style={styles.segmentedButton}>
          <View style={styles.segmentFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                <Text style={[styles.labelText, styles.labelTextTypo]}>
                  Google
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.segmentEnd, styles.segmentFlexBox]}>
            <View style={[styles.container1, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                <Text style={[styles.labelText, styles.labelTextTypo]}>
                  Facebook
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <StyleFilledStateEnabledS
        labelText="¿No tienes cuenta? Registrate aquí"
        styleFilledStateEnabledSPosition="unset"
        styleFilledStateEnabledSBackgroundColor="#76abae"
        styleFilledStateEnabledSElevation={32}
        styleFilledStateEnabledSMarginTop={20}
        styleFilledStateEnabledSHeight={24}
        styleFilledStateEnabledSWidth="unset"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  loginSpaceBlock: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  labelTextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
  },
  containerFlexBox: {
    borderColor: Color.greenA1,
    backgroundColor: Color.whiteA1,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  segmentFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    height: 48,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  starIcon: {
    display: "none",
  },
  button1: {
    lineHeight: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    color: Color.whiteA1,
    textAlign: "left",
    marginLeft: 8,
    fontSize: FontSize.m3TitleMedium_size,
  },
  xIcon: {
    marginLeft: 8,
  },
  button: {
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.backgroundBrandDefault,
    borderColor: Color.backgroundBrandDefault,
    padding: StyleVariable.space300,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
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
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
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
    height: 48,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  loginSocialNetworkSet: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundGreyA1,
    width: 300,
    height: 90,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_7xs,
  },
  loginSocialNetworkFrame: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_31xl,
    flex: 1,
    alignSelf: "stretch",
  },
});

export default FrameComponent;