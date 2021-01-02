import React, { FC } from 'react';
import { Image, ImageProps, TouchableOpacity } from 'react-native';

import { ImageIconProps } from '../interfaces';
import { getImageIcon } from '../utils/images';

const ImageIcon: FC<ImageIconProps & Pick<ImageProps, 'style'>> = ({
  navigation,
  iconName,
  style
}): JSX.Element => {
  return (
    <TouchableOpacity
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
      testID="image-icon-press"
    >
      <Image source={getImageIcon(iconName)} fadeDuration={0} style={style} />
    </TouchableOpacity>
  );
};

export default ImageIcon;
