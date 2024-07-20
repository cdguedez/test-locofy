import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const InputFieldFrame = memo(() => {
  return (
    <View style={[styles.inputSelctFieldFrame, styles.stateLayerFlexBox]}>
      <View style={styles.registerPatientMedicalSet}>
        <Text style={styles.registrarmeCon}>Registrarme con:</Text>
        <View
          style={[styles.registerPatientButtonA1, styles.registerShadowBox]}
        >
          <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
            <Text style={styles.labelText}>Paciente</Text>
          </View>
        </View>
        <View
          style={[styles.registerMedicalButtonA1, styles.registerShadowBox]}
        >
          <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
            <Text style={styles.labelText}>Médico</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  registerShadowBox: {
    marginTop: 15,
    overflow: "hidden",
    height: 40,
    width: 250,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 32,
    shadowRadius: 32,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(12, 12, 13, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  registrarmeCon: {
    fontSize: FontSize.m3TitleMedium_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.gRAYC1,
    textAlign: "left",
  },
  labelText: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.whiteA1,
    textAlign: "center",
  },
  stateLayer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
  },
  registerPatientButtonA1: {
    backgroundColor: Color.purpleA1,
  },
  registerMedicalButtonA1: {
    backgroundColor: Color.blueA1,
  },
  registerPatientMedicalSet: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundGreyA1,
    width: 330,
    height: 160,
    paddingHorizontal: Padding.p_21xl,
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
  },
  inputSelctFieldFrame: {
    paddingHorizontal: 0,
    marginTop: 20,
  },
});

export default InputFieldFrame;
