import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";


const SingleProduct = ({ product }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image={product?.image}
                    height='250'
                />
            </CardActionArea>
            <CardActionArea>
                <CardContent>
                    <Typography 
                        align='center' 
                        variant='h6'
                        color='#2E3B55'
                    >
                        {product?.name}
                    </Typography>
                    <Typography align='center' >
                        {
                            product?.oldprice &&
                            <Box component='span'
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 'large',
                                    textDecoration: 'line-through',
                                    color: '#B9CDE3',
                                    padding: '5px'
                                }}
                            >
                                {product?.oldprice} R$
                            </Box>
                        }
                        <Box component='span'
                            style={{
                                fontWeight: 'bold',
                                fontSize: 'large',
                                color: '#2E3B55',
                                padding: '5px'
                            }}
                        >
                            {product?.price} R$
                        </Box>
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions 
                style={{
                    justifyContent: 'center'
                }}
            >
                <Button 
                    endIcon={
                        <AddShoppingCart />
                    }
                    variant='outlined'
                    size='large'
                    color='#4C555C'
                >
                    Carrinho
                </Button>
            </CardActions>
        </Card>
    )
}

export default SingleProduct
