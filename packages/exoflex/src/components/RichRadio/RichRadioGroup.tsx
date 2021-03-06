import React, { ReactNode } from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ScrollView,
  View,
} from 'react-native';

import useTheme from '../../helpers/useTheme';

export type RichRadioGroupProps<T> = {
  data: Array<T>;
  keyExtractor: (item: T, index: number) => string;
  renderItem: ({ item, index }: { item: T; index: number }) => ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  testID?: string;
};

export default function RichRadioGroup<T>(props: RichRadioGroupProps<T>) {
  let {
    data,
    keyExtractor,
    renderItem,
    style,
    contentContainerStyle,
    testID,
  } = props;
  let { style: themeStyle } = useTheme();

  let rootStyle = [themeStyle?.richRadioGroup?.style, style] as ViewStyle;
  let containerStyle = [
    styles.container,
    themeStyle?.richRadioGroup?.contentContainerStyle,
    contentContainerStyle,
  ] as ViewStyle;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={rootStyle}
      contentContainerStyle={containerStyle}
      testID={testID}
    >
      {data.map((item, index) => {
        return (
          <View key={keyExtractor(item, index)}>
            {renderItem({ item, index })}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
