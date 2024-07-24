import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";

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
    paddingVertical: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  registerShadowBox: {
    marginTop: 15,
    overflow: "hidden",
    height: 40,
    width: 250,
    borderRadius: 100,
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
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto-Medium",
    color: "#c1c1c1",
    textAlign: "left",
  },
  labelText: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: "Roboto-Regular",
    color: "#f5f5f5",
    textAlign: "center",
  },
  stateLayer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  registerPatientButtonA1: {
    backgroundColor: "#946fc3",
  },
  registerMedicalButtonA1: {
    backgroundColor: "#6f96c3",
  },
  registerPatientMedicalSet: {
    borderRadius: 10,
    backgroundColor: "#e9e9e9",
    width: 330,
    height: 160,
    paddingHorizontal: 40,
    paddingVertical: 6,
    alignItems: "center",
  },
  inputSelctFieldFrame: {
    paddingHorizontal: 0,
    marginTop: 20,
  },
});

export default InputFieldFrame;