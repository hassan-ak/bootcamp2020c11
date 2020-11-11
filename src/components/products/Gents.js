import React , {useContext} from 'react'
import { DataContext } from "../../functionalComponents/DataContext";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Header from '../header/Header'
import Footer from '../footer/Footer'

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      maxHeight: 300,
      minHeight: 300,
      paddingBottom: 20,
      margin: 10,
    },
    Grid: {
      textAlign: "center",
      alignContent: "center",
      justifyContent: "center",
      paddingTop: 20,
      paddingBottom: 10,
    }
  });

export const Gents = () => {
    const context = useContext(DataContext);
    const gentsProducts = context.gentsProducts;

    const classes = useStyles();
    return (
        <div>
            <Header></Header>
            <h2>for Him</h2>
            <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        className="gridLG">
                    {
          gentsProducts.map((gentsProducts) => (
            <Grid
              xl={3}
              lg={3}
              md={4}
              sm={6}
              xs={10}
              spacing={5}
            >
              <Card className={classes.root}>
                <Link to={`/products/gents/${gentsProducts.slug}`} className="linkP">
                  <CardActionArea>
                  <Typography variant="body1" color="textSecondary" component="p">
                  {gentsProducts.brand} {gentsProducts.category} Shoes
                      </Typography>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="260"
                      image={gentsProducts.imageURL}
                      title={gentsProducts.name}
                    />
                    <CardContent>
                      <Typography variant="body1" color="textSecondary" component="p" align="center">
                        {gentsProducts.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
      </Grid>

        </div>
        
    )
}
