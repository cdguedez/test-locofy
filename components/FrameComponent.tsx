import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FrameComponent = memo(() => {
  return (
    <View style={styles.loginSocialNetworkFrame}>
      <View style={styles.loginSocialNetworkSet}>
        <Text style={styles.iniciaSesinCon}>Inicia sesión con:</Text>
        <View style={styles.segmentedButton}>
          <View style={styles.segmentFlexBox}>
            <View style={[styles.container, styles.containerFlexBox]}>
              <View style={[styles.stateLayer, styles.stateFlexBox]}>
                <Text style={[styles.labelText, styles.labelTypo]}>Google</Text>
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
      <View style={[styles.registerButtonA1, styles.containerFlexBox]}>
        <View style={[styles.stateLayer2, styles.stateFlexBox]}>
          <Text style={[styles.labelText2, styles.labelTypo]}>
            ¿No tienes cuenta? Registrate aquí
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  containerFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  stateFlexBox: {
    paddingVertical: Padding.p_3xs,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyBase_size,
  },
  segmentFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    flex: 1,
    flexDirection: "row",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  iniciaSesinCon: {
    color: Color.textDefaultTertiary,
    display: "flex",
    width: 168,
    height: 19,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.bodyBase_size,
    alignItems: "center",
  },
  labelText: {
    color: Color.greenA1,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_xs,
  },
  container: {
    borderTopLeftRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    borderWidth: 1,
    borderColor: Color.greenA1,
    borderStyle: "solid",
    backgroundColor: Color.wHITEF5,
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  container1: {
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    borderWidth: 1,
    borderColor: Color.greenA1,
    borderStyle: "solid",
    backgroundColor: Color.wHITEF5,
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
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
    color: Color.wHITEF5,
  },
  stateLayer2: {
    paddingHorizontal: Padding.p_5xl,
  },
  registerButtonA1: {
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
    marginTop: 20,
  },
  loginSocialNetworkFrame: {
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_181xl,
    paddingBottom: Padding.p_31xl,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default FrameComponent;