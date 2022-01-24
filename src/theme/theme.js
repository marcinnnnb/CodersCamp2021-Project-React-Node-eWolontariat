import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#FF7A82',
        contrastText: '#fff',
        dark: '#868AE0'
      },
      secondary: {
        main: '#868AE0',
        contrastText: '#fff'
      },
      success: {
        main: '#4DAF7B',
        contrastText: '#fff'
      },
      
    },
    typography: {
      fontFamily: "'Quicksand', sans-serif", 
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '2rem',
      },
      h2: {
        fontWeight: 'bold',
        fontSize: '1.6rem'
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        lineHeight: '1.7'
      },
      h4: {
        fontSize: 36,
        fontWeight: 700,
        lineHeight: 2
      },
      h5: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 2
      },
      h6: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 4
      },
      button: {
        textTransform: 'none',
        letterSpacing: '2px',
        fontSize: '1rem',
        '&:hover': {
          fontWeight: 'bold',
         },
      }
    }
});
  