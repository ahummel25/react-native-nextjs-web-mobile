import { ImageSourcePropType } from 'react-native';

export const getImageIcon = (iconName: string): ImageSourcePropType => {
  switch (iconName) {
    case 'back':
      return require('../../assets/images/back.png');
    default:
      return require('../../assets/images/back.png');
  }
};
