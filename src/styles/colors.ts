const rgba = (r: number, g: number, b: number, a = 1): string =>
  `rgba(${r},${g},${b},${a})`;

export const colors = {
  lightBlue: rgba(56, 151, 241),
  placeholderTextColor: rgba(196, 195, 203),
  whiteOne: rgba(234, 234, 234),
  whiteTwo: rgba(250, 250, 250)
};
