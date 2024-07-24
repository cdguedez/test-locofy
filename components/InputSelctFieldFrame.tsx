import React, { memo } from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export type InputSelctFieldFrameType = {
  style?: StyleProp<ViewStyle>;
};

const InputSelctFieldFrame = memo(({ style }: InputSelctFieldFrameType) => {
  return (
    <View style={[styles.inputSelctFieldFrame, style]}>
      <View>
        <Text style={styles.label}>Label</Text>
        <Text style={[styles.description, styles.errorTypo]}>Description</Text>
        <TextInput
          style={[styles.input, styles.inputLayout]}
          placeholder="Ingresa tu correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          secureTextEntry={false}
          placeholderTextColor="#b3b3b3"
          autoFocus
          textContentType="emailAddress"
        />
        <Text style={[styles.error, styles.errorTypo]}>Error</Text>
      </View>
      <View style={styles.inputField1}>
        <Text style={styles.label}>Label</Text>
        <Text style={[styles.description, styles.errorTypo]}>Description</Text>
        <TextInput
          style={[styles.input1, styles.inputLayout]}
          placeholder="Ingresa tu contraseña"
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="#b3b3b3"
          passwordRules="minlength: 12; required: upper; required: lower; required: digit; required: special;"
          textContentType="password"
        />
        <Text style={[styles.error, styles.errorTypo]}>Error</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  errorTypo: {
    marginTop: 8,
    display: "none",
    textAlign: "left",
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    fontSize: 16,
  },
  inputLayout: {
    borderStyle: "solid",
    borderWidth: 1,
    maxHeight: 40,
    maxWidth: 500,
    minWidth: 370,
    minHeight: 40,
    flex: 1,
    textTransform: "none",
    borderRadius: 9999,
    fontFamily: "Roboto-Regular",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    overflow: "hidden",
    width: 371,
    backgroundColor: "#fff",
    marginTop: 8,
    color: "#757575",
    fontSize: 16,
    alignItems: "center",
  },
  label: {
    display: "none",
    textAlign: "left",
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    fontSize: 16,
    color: "#1e1e1e",
    alignSelf: "stretch",
  },
  description: {
    color: "#757575",
    marginTop: 8,
    alignSelf: "stretch",
  },
  input: {
    borderColor: "#B3B3B3",
  },
  error: {
    marginTop: 8,
    color: "#1e1e1e",
  },
  input1: {
    borderColor: "#b3b3b3",
    textShadowColor: "76abae",
    borderBottomWidth: null,
  },
  inputField1: {
    marginTop: 20,
  },
  inputSelctFieldFrame: {
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default InputSelctFieldFrame;
