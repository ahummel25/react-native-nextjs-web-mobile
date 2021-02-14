import { Image, ImageResolvedAssetSource } from 'react-native';

import backImg from '../../assets/images/back.png';

export const getImageAssetSource = (
  iconName: string
): ImageResolvedAssetSource => {
  switch (iconName) {
    case 'back':
      return Image.resolveAssetSource(backImg);
    default:
      return Image.resolveAssetSource(backImg);
  }
};
