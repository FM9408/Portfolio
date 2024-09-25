import { alpha, emphasize } from '@mui/material/styles';
import * as colors from "@mui/material/colors"

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: `${colors.red[300]}`,
  light: `${colors.red[400]}`,
  main: `${colors.red[500]}`,
  dark: `${colors.red[600]}`,
  darker: `${colors.red[700]}`,
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: `${alpha(colors.pink[200],.3)}`,
  light: `${alpha(colors.pink[300],.4)}`,
  main: `${alpha(colors.pink[400],.5)}`,
  dark: `${alpha(colors.pink[500],.6)}`,
  darker: `${alpha(colors.pink[600],.7)}`,
  contrastText: `${emphasize(colors.pink[400], .9)}`,
};

const INFO = {
  lighter: '#5eb2ff',
  light: '#39a1ff',
  main: '#1291ff',
  dark: '#1983f0',
  darker: '#1b71dc',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#f16362',
  light: '#f10016',
  main: '#df0010',
  dark: '#d20006',
  darker: '#c50000',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
