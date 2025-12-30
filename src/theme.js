import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EC2323', 
      light: '#63a4ff',
      dark: '#004ba0',
    },
    secondary: {
      main: '#f50057',
        },
        navigation: {
      main:'#272727'  
    },
    background: {
      default: '#FFFAFA',
      paper: '#ffffff',
        },
    text: {
      primary: '#272727',
      secondary: '#3E3E3E',
    },
  },
  font :{
    header: '15px',
    secondary:'10px'
  }
});

export default theme;
