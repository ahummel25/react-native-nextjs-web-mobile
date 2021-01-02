import React, { FC } from 'react';
import { Image, ImageProps, TouchableOpacity } from 'react-native';

import { ImageIconProps } from '../interfaces';
import { getImageIcon } from '../utils/images';

const ImageIcon: FC<ImageIconProps & Pick<ImageProps, 'style'>> = ({
  navigation,
  iconName,
  route,
  style
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={(): void => {
        if (route) navigation.navigate(route.name);
      }}
      testID="image-icon-press"
    >
      <Image source={getImageIcon(iconName)} fadeDuration={0} style={style} />
    </TouchableOpacity>
  );
};

export default ImageIcon;
