const mainColors = {
  green: '#008037',
  semiPurple: '#6776ED',
  gray: '#7D8797',
  gray2: '#E9E9E9',
  bottom: '#112340',
  // color bab konsultasi
  akidah: '#1ABC9C',
  tafsir: '#8E44AD',
  hadits: '#F1C40F',
  fiqih: '#3498DB',
  sejarahIslam: '#E74C3C',
};

export const colors = {
  primary: mainColors.green,
  secondary: mainColors.semiPurple,
  black: 'black',
  white: 'white',
  gray: mainColors.gray,
  bottom: mainColors.bottom,
  // get color bab konsultasi
  akidah: mainColors.akidah,
  tafsir: mainColors.tafsir,
  hadits: mainColors.hadits,
  fiqih: mainColors.fiqih,
  sejarahIslam: mainColors.sejarahIslam,
  text: {
    primary: 'black',
    secondary: mainColors.gray,
    menuInactive: mainColors.gray,
    menuActive: mainColors.semiPurple,
  },
  button: {
    primary: {
      background: mainColors.green,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: 'black',
    },
  },
  border: mainColors.gray2,
};
