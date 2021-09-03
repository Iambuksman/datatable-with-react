import { makeStyles } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'100%',
      minHeight:'100vh',
      position:"relative", top: 0, bottom: 10, left: 0, right: 0,
      background: "#F8F6FB"
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    buttonText:{
      fontFamily: "Roboto",
      textTransform: "none"
    },
    button:{
    
    }
}));
