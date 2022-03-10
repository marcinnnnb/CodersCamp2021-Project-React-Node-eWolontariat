import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
      primary: {
        main: '#FF7A82',
        contrastText: '#fff',
        dark: '#e9626a'
      },
      secondary: {
        main: '#868AE0',
        contrastText: '#fff',
        dark:'#857AE0',
      },
      tertiary: {
        main: '#4DAF7B',
        contrastText: '#fff',
        dark: '#42a772',
      }
    },
    typography: {
      fontFamily: "'Quicksand', sans-serif", 
      h1: {
        fontSize: '2.2rem',
        fontWeight: '700',
        textAlign: 'center',
        margin: '2rem',
        letterSpacing: '2px',
      },
      h2: {
        fontWeight: '900',
        fontSize: '1.8rem'
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: '500',
        lineHeight: '1.7'
      },
      h4: {
        fontSize: "0.9rem",
        fontWeight: 700,
        lineHeight: 1.4
      },
      h5: {
        fontSize: "0.8rem",
        fontWeight: 500,
        lineHeight: 1.4
      },
      h6: {
        fontSize: "0.6rem",
        fontWeight: 400,
        lineHeight: 4
      },
      body1: {
        fontSize: '1.3rem',
        lineHeight: '1.7'
      },
      body2: {
        fontSize: '1.1rem',
        lineHeight: '1.4'
      },
      button: {
        textTransform: 'none',
        letterSpacing: '1.2px',
        fontSize: '1rem',
        fontWeight: 'bold',
      },
    },  
});
