import React from 'react';
import { WelCome } from './Welcome/WelCome';
import Proceed from './Proceed/Proceed'
import { Link } from 'react-router-dom'
import styles from './Home.module.css';


export const Home= () => {
  return (
    <div className = {styles.container}>
      <WelCome/>
      <Link className = {styles.links} to="products" ><Proceed/></Link>
    </div>
  );
}
