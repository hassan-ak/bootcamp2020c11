import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Products.css'
import { Link } from 'react-router-dom'
import ladiesimg from '../../Images/ladies.png'
import gentsimg from '../../Images/gents.png'

export const Products = () => {
    return (
        <div className="productsContainer">
            <Header></Header>
            <Grid container spacing={3} justify="center" align="center">
                <Grid item xs={10} md={4} component={Card} className="card gents"> 
                    <Link className = "linkP" to="/products/gents" >
                    <CardContent>
                        <img src={gentsimg} className="img" alt="ladies" align="center"/>
                        <Typography variant= "h5" color="textSecondary" align = "center" gutterBottom >
                                    for <strong>Him</strong>
                        </Typography>
                    </CardContent>
                    </Link> 
                </Grid>
                <Grid item xs={10} md={4} component={Card} className="card ladies"> 
                    <Link className = "linkP" to="/products/ladies" >
                    <CardContent>
                        <img src={ladiesimg} className="img" alt="ladies" align="center"/>
                        <Typography variant= "h5" color="textSecondary" align = "center" gutterBottom >
                                    for <strong>Her</strong>
                        </Typography>
                    </CardContent>
                    </Link> 
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    )
}