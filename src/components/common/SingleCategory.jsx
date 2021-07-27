import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const SingleCategory = ({ item }) => {

    const history = useHistory();

    const showcategoryproducts = () => {
        history.push(`category-${item?.title}-${item?.id}`)
    }

    return (
        <CardActionArea onClick={showcategoryproducts}>

            <Card style={{
                whidth: '100%',
                height: '100px',
                background: '#6275A3',
                backgroundImage: `url(${item?.image})`,
                backgroundSize: '100% 100%',
                padding: '5px',
                color: 'white',
                position: 'relative',
            }}>

                <Box style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    display: 'grid',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                    <Typography variant='h5'>
                        {item?.title}
                    </Typography>
                </Box>

            </Card>
            
        </CardActionArea>
    )
}

export default SingleCategory
