import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
          main:'#FF7A82',
          contrastText: "#fff"
    },
    secondary:{
        main:'#4DAF7B',
        contrastText: "#fff"
    },
    info:{
      main:'#868AE0',
      contrastText: "#fff"
    },
    neutral:{
      main:'#000'
    }
  },

  typography: {
    button: {
      textTransform: 'none',
    }
  }
});

export default theme;