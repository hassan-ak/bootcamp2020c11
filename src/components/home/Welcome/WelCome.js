import React from 'react';
import title from '../../../Images/title.png';
import styles from './WelCome.module.css';

export const WelCome = () => {
    return (
        <div className = {styles.container}>
            <h1>Wellcome to</h1>
            <img src={title} alt="Shoes" />
            <h1>Store</h1>
        </div>
    )
}