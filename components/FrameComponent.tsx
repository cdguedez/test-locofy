import React, { memo } from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  StyleVariable,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const FrameComponent = memo(() => {
  return (
    <View style={[styles.loginSocialNetworkFrame, styles.loginFlexBox]}>
      <View style={styles.inputFieldTest2}>
        <Text style={[styles.label, styles.labelTypo]}>Label Test 2</Text>
        <Text style={[styles.description, styles.errorTypo]}>Description</Text>
        <TextInput
          style={[styles.input, styles.inputFlexBox]}
          placeholder="Value"
          keyboardType="email-address"
          autoCapitalize="sentences"
          placeholderTextColor="#b3b3b3"
        />
        <Text style={[styles.error, styles.errorTypo]}>Error</Text>
      </View>
      <View style={styles.inputFieldTest21}>
        <Text style={[styles.label1, styles.labelTypo]}>Label Test 1</Text>
        <Text style={[styles.description, styles.errorTypo]}>Description</Text>
        <TextInput
          style={[styles.input1, styles.inputSpaceBlock]}
          placeholder="Value"
          keyboardType="email-address"
          autoCapitalize="sentences"
          placeholderTextColor="#1e1e1e"
        />
        <Text style={[styles.error, styles.errorTypo]}>Error</Text>
      </View>
      <Pressable style={[styles.button, styles.buttonFlexBox]}>
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.button1, styles.labelTypo]}>Button</Text>
        <Image
          style={[styles.xIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/x.png")}
        />
      </Pressable>
      <View style={[styles.loginSocialNetworkSet, styles.loginFlexBox]}>
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
    </View>
  );
});

const styles = StyleSheet.create({
  loginFlexBox: {
    alignItems: "center",
    marginTop: 20,
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.m3TitleMedium_size,
  },
  errorTypo: {
    marginTop: 8,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 22,
    fontSize: FontSize.m3TitleMedium_size,
  },
  inputFlexBox: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inputSpaceBlock: {
    minWidth: 240,
    paddingVertical: StyleVariable.space3001,
    paddingHorizontal: StyleVariable.space4001,
    borderColor: Color.borderDefaultDefault,
    backgroundColor: Color.backgroundDefaultDefault,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.m3TitleMedium_size,
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
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "stretch",
  },
  segmentFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    height: 48,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    display: "none",
    color: Color.textDefaultDefault,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.m3TitleMedium_size,
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    alignSelf: "stretch",
  },
  input: {
    borderRadius: 9999,
    textTransform: "lowercase",
    borderColor: Color.borderDefaultDefault,
    textDecorationColor: "76ABAE",
    borderWidth: 1,
    minWidth: 240,
    paddingVertical: StyleVariable.space3001,
    paddingHorizontal: StyleVariable.space4001,
    backgroundColor: Color.backgroundDefaultDefault,
    overflow: "hidden",
    borderStyle: "solid",
    marginTop: 8,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.m3TitleMedium_size,
    alignItems: "center",
  },
  error: {
    color: Color.textDefaultDefault,
  },
  inputFieldTest2: {
    alignSelf: "stretch",
  },
  label1: {
    color: Color.textDefaultDefault,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.m3TitleMedium_size,
    alignSelf: "stretch",
  },
  input1: {
    borderRadius: StyleVariable.radius2001,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inputFieldTest21: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  starIcon: {
    display: "none",
  },
  button1: {
    lineHeight: 16,
    color: Color.whiteA1,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
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
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    marginTop: 20,
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
    flex: 1,
    flexDirection: "row",
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
    marginTop: 20,
  },
  loginSocialNetworkFrame: {
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_31xl,
    marginTop: 20,
    alignSelf: "stretch",
  },
});

export default FrameComponent;