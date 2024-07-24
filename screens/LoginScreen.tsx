import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent from "../components/FrameComponent";
import {
  FontFamily,
  FontSize,
  Border,
  StyleVariable,
  Color,
  Padding,
} from "../GlobalStyles";

const LoginScreen = () => {
  return (
    <View style={styles.testLoginScreen1}>
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
      <ScrollView
        style={styles.loginBackgroundA1}
        horizontal={false}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.loginBackgroundA1Content}
      >
        <Text style={styles.inicioDeSesin}>Inicio de Sesión</Text>
        <View style={styles.inputSelctFieldFrame}>
          <View>
            <Text style={styles.label}>Label</Text>
            <Text style={[styles.description, styles.errorTypo]}>
              Description
            </Text>
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
            <Text style={[styles.description, styles.errorTypo]}>
              Description
            </Text>
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
        <View style={[styles.loginButtonFrame, styles.frameSpaceBlock]}>
          <TouchableHighlight
            style={[styles.button, styles.buttonLayout]}
            underlayColor="rgba(5, 87, 84, 0.7)"
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <>
              <Image
                style={styles.starIcon}
                contentFit="cover"
                source={require("../assets/star1.png")}
              />
              <Text style={[styles.button1, styles.buttonFlexBox]}>
                Iniciar Sesión
              </Text>
              <Image
                style={styles.starIcon}
                contentFit="cover"
                source={require("../assets/x1.png")}
              />
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button2, styles.buttonLayout]}
            underlayColor="rgba(214, 214, 214, 0.7)"
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <>
              <Image
                style={styles.starIcon}
                contentFit="cover"
                source={require("../assets/star1.png")}
              />
              <Text style={[styles.button3, styles.buttonFlexBox]}>
                Recordar Contraseña
              </Text>
              <Image
                style={styles.starIcon}
                contentFit="cover"
                source={require("../assets/x1.png")}
              />
            </>
          </TouchableHighlight>
        </View>
        <FrameComponent />
        <View style={[styles.footerFrame, styles.footerFrameFlexBox]}>
          <Image
            style={styles.logoCloudIceIcon}
            contentFit="cover"
            source={require("../assets/logo-cloud-ice1.png")}
          />
          <Text
            style={[styles.designedDeveloped, styles.footerFrameFlexBox]}
            numberOfLines={3}
          >{`Designed & Developed by The Cloud Solution LLC.
Marketed in the Republic of Chile by The Cloud Solution SpA.
Registered Trademark - All Rights Reserved.`}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBackgroundA1Content: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  errorTypo: {
    marginTop: 8,
    display: "none",
    fontFamily: FontFamily.bodyBase,
    lineHeight: 22,
    fontSize: FontSize.bodyBase_size,
    textAlign: "left",
  },
  inputLayout: {
    borderStyle: "solid",
    borderWidth: 1,
    maxHeight: 40,
    maxWidth: 500,
    minWidth: 370,
    minHeight: 40,
    textTransform: "none",
    borderRadius: Border.br_9980xl,
    paddingVertical: StyleVariable.space3001,
    paddingHorizontal: StyleVariable.space4001,
    width: 371,
    backgroundColor: Color.backgroundDefaultDefault,
    flexDirection: "row",
    marginTop: 8,
    color: Color.textDefaultSecondary,
    fontSize: FontSize.bodyBase_size,
    fontFamily: FontFamily.m3TitleLarge,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    marginTop: 20,
    justifyContent: "center",
  },
  buttonLayout: {
    textAlign: "center",
    minWidth: 145,
    maxWidth: 370,
    padding: StyleVariable.space2001,
    justifyContent: "space-between",
    borderRadius: StyleVariable.radiusFull1,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  buttonFlexBox: {
    textAlign: "center",
    fontFamily: FontFamily.bodyBase,
    flex: 1,
  },
  footerFrameFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
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
    justifyContent: "flex-end",
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  inicioDeSesin: {
    fontSize: FontSize.m3HeadlineMedium_size,
    lineHeight: 36,
    textAlign: "left",
    color: Color.greenA1,
    fontFamily: FontFamily.m3TitleLarge,
  },
  label: {
    display: "none",
    color: Color.textDefaultDefault,
    fontFamily: FontFamily.bodyBase,
    lineHeight: 22,
    fontSize: FontSize.bodyBase_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    marginTop: 8,
    alignSelf: "stretch",
  },
  input: {
    borderColor: "#B3B3B3",
  },
  error: {
    color: Color.textDefaultDefault,
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
    padding: Padding.p_3xs,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  starIcon: {
    width: 16,
    height: 16,
    display: "none",
    overflow: "hidden",
  },
  button1: {
    fontSize: 20,
    lineHeight: 20,
    color: Color.wHITEF5,
  },
  button: {
    backgroundColor: "#76ABAE",
    maxHeight: 40,
    minHeight: 40,
    color: "#FFFFFF",
    textAlign: "center",
    minWidth: 145,
    maxWidth: 370,
    padding: StyleVariable.space2001,
    justifyContent: "space-between",
    borderRadius: StyleVariable.radiusFull1,
  },
  button3: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 14,
    color: Color.greenA1,
  },
  button2: {
    borderColor: "#76ABAE",
    minHeight: 24,
    maxHeight: 24,
    color: "#76ABAE",
    marginTop: 10,
    textAlign: "center",
    minWidth: 145,
    maxWidth: 370,
    padding: StyleVariable.space2001,
    justifyContent: "space-between",
    borderRadius: StyleVariable.radiusFull1,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundWhite,
  },
  loginButtonFrame: {
    paddingHorizontal: Padding.p_81xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  logoCloudIceIcon: {
    width: 130,
    height: 21,
  },
  designedDeveloped: {
    fontSize: 7,
    letterSpacing: 1,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.textDefaultTertiary,
    display: "flex",
    width: 225,
    marginLeft: 20,
    textAlign: "left",
  },
  footerFrame: {
    width: 390,
    flexWrap: "wrap",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  loginBackgroundA1: {
    borderTopLeftRadius: Border.br_14xl,
    borderTopRightRadius: Border.br_14xl,
    zIndex: 2,
    backgroundColor: Color.backgroundWhite,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  testLoginScreen1: {
    backgroundColor: Color.greenA2,
    height: 932,
    alignItems: "center",
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
});

export default LoginScreen;