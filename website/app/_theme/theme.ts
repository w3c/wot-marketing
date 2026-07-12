import { extendTheme } from '@mui/joy';

export const theme = extendTheme({
  fontFamily: { body: 'Arial, Helvetica, sans-serif', display: 'Arial, Helvetica, sans-serif' },
  radius: { sm: '6px', md: '8px', lg: '12px' },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          mainChannel: '0 90 156',
          plainColor: '#005A9C',
          solidBg: '#005A9C',
          solidHoverBg: '#004578',
        },
      },
    },
  },
});
