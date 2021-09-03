import {createMuiTheme} from '@material-ui/core/styles';

export const THEME = createMuiTheme({
   typography: {
    "fontFamily": "\"Roboto\", sans-serif",
    "fontSize": 12,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
  },
  palette: {
   primary: {
     main:'#08415c'
   },
 },
});
