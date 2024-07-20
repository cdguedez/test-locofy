import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

export type StyleFilledStateEnabledSType = {
  labelText?: string;

  /** Style props */
  styleFilledStateEnabledSPosition?: string;
  styleFilledStateEnabledSBackgroundColor?: string;
  styleFilledStateEnabledSElevation?: number;
  styleFilledStateEnabledSMarginTop?: number | string;
  styleFilledStateEnabledSHeight?: number | string;
  styleFilledStateEnabledSWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StyleFilledStateEnabledS = memo(
  ({
    labelText = "Label",
    styleFilledStateEnabledSPosition,
    styleFilledStateEnabledSBackgroundColor,
    styleFilledStateEnabledSElevation,
    styleFilledStateEnabledSMarginTop,
    styleFilledStateEnabledSHeight,
    styleFilledStateEnabledSWidth,
  }: StyleFilledStateEnabledSType) => {
    const styleFilledStateEnabledSStyle = useMemo(() => {
      return {
        ...getStyleValue("position", styleFilledStateEnabledSPosition),
        ...getStyleValue(
          "backgroundColor",
          styleFilledStateEnabledSBackgroundColor
        ),
        ...getStyleValue("elevation", styleFilledStateEnabledSElevation),
        ...getStyleValue("marginTop", styleFilledStateEnabledSMarginTop),
        ...getStyleValue("height", styleFilledStateEnabledSHeight),
        ...getStyleValue("width", styleFilledStateEnabledSWidth),
      };
    }, [
      styleFilledStateEnabledSPosition,
      styleFilledStateEnabledSBackgroundColor,
      styleFilledStateEnabledSElevation,
      styleFilledStateEnabledSMarginTop,
      styleFilledStateEnabledSHeight,
      styleFilledStateEnabledSWidth,
    ]);

    return (
      <View
        style={[
          styles.stylefilledStateenabledS,
          styles.stateLayerFlexBox,
          styleFilledStateEnabledSStyle,
        ]}
      >
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <Text style={styles.labelText}>{labelText}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    color: Color.backgroundDefaultDefault,
    textAlign: "center",
  },
  stateLayer: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
  },
  stylefilledStateenabledS: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.schemesPrimary,
    height: 40,
    overflow: "hidden",
  },
});

export default StyleFilledStateEnabledS;
