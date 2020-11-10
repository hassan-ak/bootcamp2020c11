// React Imports
import React from 'react';

// Material Ui Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton} from '@material-ui/core';
import logo from '../../Images/title.png'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Header.css'

// Styles for AppBAr
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  background:{
      backgroundColor: 'rgba(6, 247, 247, 0.1)',
  },
  shoeIcon:{
      maxWidth: '25pt',
},
paper: {
    textAlign: 'left',
    backgroundColor:'transparent',
  },

  paperText: {
    textAlign: 'center',
    backgroundColor:'transparent',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  cart: {
    textAlign: 'right',
    backgroundColor:'transparent',
  },
  textPaper: {
    textAlign: 'right',
    backgroundColor:'white',
  },
  testbutton: {
    color : "white",
  },
}));

// Header Function
export default function Header() {
  // const for using styles
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.background}>
        <Toolbar>
            <Grid item xs={1}>
                <Paper className={classes.paper} elevation={0}>
                    <Link to="/" className="headerLink" >
                        <IconButton 
                            edge="start" 
                            aria-label="shoe">
                            <img src={logo} className={classes.shoeIcon} alt="logo" /></IconButton>
                    </Link>
                </Paper>
            </Grid>


            <Grid item xs={10}>
                <Grid item xs={12} sm={8} md={4}>
                    <Paper className={classes.paperText} elevation={0}>
                        <Typography variant="h5">
                            <Link className="headerLink" to="/" >Home</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link className="headerLink" to="/products" >Products</Link>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>



            <Grid item xs={1}>
                <Paper className={classes.cart} elevation={0}>
                    <Link className="headerLink" to="/cart" >
                        <ShoppingCartIcon
                            edge="end" 
                            aria-label="cart"
                            className={classes.testbutton}
                        />
                    </Link>
                </Paper>
            </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}