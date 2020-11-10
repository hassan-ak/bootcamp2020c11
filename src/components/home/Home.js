import React from 'react';
import title from '../../Images/title.png';
import { Link } from 'react-router-dom'
import './Home.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Footer from '../footer/Footer'

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "50px",
    textDecoration: "none",
  },
}));

export const Home= () => {

  const classes = useStyles();

  return (
    <div className = "container">

      <div className = "shoeContainer">
            <h1>Wellcome to</h1>
            <img src={title} alt="Shoes" className="shoeImage"/>
            <h1>Store</h1>
        </div>

      <Link to="products" className="link">
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          endIcon={<ArrowForwardIcon/>}>
            Proceed to store
        </Button>
      </Link>

      <Footer></Footer>

    </div>
  );
}
