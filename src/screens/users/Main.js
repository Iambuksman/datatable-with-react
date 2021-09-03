import React from 'react';
import Typography  from '@material-ui/core/Typography';
import ListItem  from '@material-ui/core/ListItem';
import Grid  from '@material-ui/core/Grid';


const users = [
    {
        id:0,
        name: "John Doe",
        phone: "07065363100"
    },
    {
        id:1,
        name: "Jane Doe",
        phone: "07065363100"
    },

];

export default function Main(){
    //const users = useSelector(state => state.users.users)
    return(
        <div>
            <Grid container direction="row" alignItems="center" justify="center">
            <Grid item md={8}>
            <Typography> Hello Users</Typography>
            <Header />
            {users.map((item) => 
            <ListItem divider>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item md={1}>
                        <Typography align="left"> {item.id} </Typography>
                    </Grid>
                    <Grid item md={8}>
                        <Typography align="left"> {item.name} </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography align="left"> {item.phone} </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            )}
            </Grid>
            </Grid>
        </div>
    )
}

function Header(){
    return(
        <ListItem divider>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item md={1}>
                        <Typography align="left"> ID </Typography>
                    </Grid>
                    <Grid item md={8}>
                        <Typography align="left"> Name </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography align="left"> Phone </Typography>
                    </Grid>
                </Grid>
            </ListItem>
    )
}