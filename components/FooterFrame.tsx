import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export type FooterFrameType = {
  style?: StyleProp<ViewStyle>;
};

const FooterFrame = memo(({ style }: FooterFrameType) => {
  return (
    <View style={[styles.footerFrame, style, styles.footerFrameFlexBox]}>
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
  );
});

const styles = StyleSheet.create({
  footerFrameFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
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
    fontFamily: "Roboto-Medium",
    color: "#b3b3b3",
    textAlign: "left",
    display: "flex",
    width: 225,
    marginLeft: 20,
  },
  footerFrame: {
    width: 390,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
});

export default FooterFrame;
