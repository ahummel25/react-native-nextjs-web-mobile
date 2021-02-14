import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { ImageIconProps } from '../interfaces';
import { getImageAssetSource } from '../utils/images';

const ImageIcon: FC<ImageIconProps> = ({
  a11yLabel,
  iconName,
  navigation,
  style
}): JSX.Element => (
  <TouchableOpacity
    accessibilityLabel={a11yLabel}
    accessibilityRole="image"
    onPress={(): void => {
      switch (iconName) {
        case 'back':
          navigation.pop();
          break;
        default:
          navigation.pop();
          break;
      }
    }}
  >
    <Image
      source={{ uri: getImageAssetSource(iconName).uri }}
      fadeDuration={0}
      style={style}
    />
  </TouchableOpacity>
);

export default ImageIcon;
