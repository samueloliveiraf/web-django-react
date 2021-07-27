import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import AllProducts from '../components/common/AllProducts';
import { domain } from '../env';

const SingleCategory = () => {

    const [category, setCategory] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        const getproducts = async () => {
            await axios({
                url: `${domain}/api/singlecategoris/${id}/`,
                method: 'GET'
            }).then(response => {
                // console.log(response.data)
                setCategory(response.data[0])
            })
        }
        getproducts()
    }, [])

    return (
        <Container>
            <Grid
                container
                direction='column'
                alignItems='center'
            >

                <Typography variant='h3'>
                    {category?.title}
                </Typography>

                <AllProducts
                    products={category?.products}
                    showall={true}
                />

            </Grid>
        </Container>
    )

}

export default SingleCategory
