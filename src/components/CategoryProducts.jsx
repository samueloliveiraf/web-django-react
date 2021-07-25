import axios from 'axios'
import React from 'react'
import { domain } from '../env'
import { useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import Headline from './common/Headline'
import AllProducts from './common/AllProducts'


const CategoryProducts = () => {

    const [categoryProducts, setCategoryProducts] = useState(null);

    useEffect(() => {
        const getCategoryProducts = async () => {
          await axios({
            url: `${domain}/api/categoryproduct/`,
            method: "GET",
          })
            .then((response) => {
              console.log(response.data);
              setCategoryProducts(response.data);
            })
            .catch((error) => {
              console.log("CategoryProduct", error);
            });
        };
        getCategoryProducts();
      }, []);

    return (
        <Grid container direction="column">
        {categoryProducts?.map((item, i) => (
          <Box key={i} container="div">
            <>
              <Headline title={item?.title} subtitle="Products" />
            
              <AllProducts products={item?.products} />

            </>
          </Box>
        ))}
      </Grid>
    )
}

export default CategoryProducts
