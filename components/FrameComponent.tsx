import React, { memo } from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

export type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent = memo(({ style }: FrameComponentType) => {
  return (
    <View style={[styles.loginSocialNetworkFrame, style]}>
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
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16,
  },
  segmentFlexBox: {
    paddingVertical: 4,
    paddingHorizontal: 0,
    flex: 1,
    flexDirection: "row",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  iniciaSesinCon: {
    color: "#b3b3b3",
    display: "flex",
    width: 168,
    height: 19,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16,
    alignItems: "center",
  },
  labelText: {
    color: "#76abae",
  },
  stateLayer: {
    paddingHorizontal: 12,
  },
  container: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderWidth: 1,
    borderColor: "#76abae",
    borderStyle: "solid",
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  container1: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderWidth: 1,
    borderColor: "#76abae",
    borderStyle: "solid",
    backgroundColor: "#f5f5f5",
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
    borderRadius: 100,
    backgroundColor: "#76abae",
    height: 24,
    marginTop: 20,
  },
  loginSocialNetworkFrame: {
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingTop: 200,
    paddingBottom: 50,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default FrameComponent;