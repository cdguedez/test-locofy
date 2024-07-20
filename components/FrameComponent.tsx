import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import StyleFilledStateEnabledS from "./StyleFilledStateEnabledS";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent = memo(() => {
  return (
    <View style={[styles.loginSocialNetworkFrame, styles.stateLayerFlexBox1]}>
      <View style={styles.loginSocialNetworkSet}>
        <Text style={styles.iniciaSesinCon}>Inicia sesión con:</Text>
        <View style={[styles.segmentedButton, styles.stateLayerFlexBox]}>
          <View style={styles.segmentFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                <Text style={styles.labelText}>Google</Text>
              </View>
            </View>
          </View>
          <View style={[styles.segmentEnd, styles.segmentFlexBox]}>
            <View style={[styles.container1, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
                <Text style={styles.labelText}>Facebook</Text>
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
  stateLayerFlexBox1: {
    flex: 1,
    alignSelf: "stretch",
  },
  stateLayerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlexBox: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.greenA1,
    borderStyle: "solid",
    backgroundColor: Color.whiteA1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
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
  iniciaSesinCon: {
    color: Color.textDefaultTertiary,
    display: "flex",
    width: 168,
    height: 19,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
    alignItems: "center",
  },
  labelText: {
    color: Color.greenA1,
    textAlign: "center",
    fontFamily: FontFamily.m3TitleMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.m3TitleMedium_size,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
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
    flexDirection: "row",
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
  loginSocialNetworkFrame: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_31xl,
    marginTop: 20,
    alignItems: "center",
  },
});

export default FrameComponent;
