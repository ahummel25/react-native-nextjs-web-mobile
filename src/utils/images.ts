import { ImageSourcePropType } from 'react-native';

export const getImageIcon = (name: string): ImageSourcePropType => {
  switch (name) {
    case 'back':
      return require('../../assets/images/back.png');
    default:
      return require('../../assets/images/back.png');
  }
};
