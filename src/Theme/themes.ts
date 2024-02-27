// Theme/themes.ts
import { createTheme } from '@mui/material';
export const theme = createTheme({
  typography: {
    fontFamily: "'Drius', sans-serif",
  },
  palette: {
    primary: {
      main: '#00be00',
    },
    secondary: {
      main: '#242625',
      light: '#1B2929'
    },
    info: {
      main: '#00be00'
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        
      @import url('https://fonts.cdnfonts.com/css/drius');
        body {
          font-family: 'Drius', sans-serif;
        }
      `,
    },
    MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: `url('/assets/images/texture_honeycomb_black.jpg'), linear-gradient(#00be00, #00be00)`,
            backgroundColor: '#00be00',
            color: 'black',
          },
        },
      },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '30px 30px 30px rgba(0, 0, 0, 0.9)',
          '&:hover': {
            backgroundColor: 'black',
            color: '#00be00',
          },
        },
      },
    },
  },
});
