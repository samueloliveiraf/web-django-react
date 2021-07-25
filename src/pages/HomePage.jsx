import { Container } from '@material-ui/core';
import React from 'react';
import Sliders from '../components/Slider';
import TradingProducts from '../components/TrandingProducts';
import CategoryName from '../components/CategoryName';
import MostViewProducts from '../components/MostViewProducts';
import CategoryProducts from '../components/CategoryProducts';
import BaradsName from '../components/BaradsName';


const HomePage = () => {
    return (
      <>
        <Sliders />
        <Container>
            <TradingProducts />
            <CategoryName />
            <MostViewProducts />
            <CategoryProducts />
            <BaradsName />
        </Container>
      </> 
    )
}


export default HomePage
