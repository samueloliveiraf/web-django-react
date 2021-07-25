import React from 'react'
import { Grid, Box } from '@material-ui/core'

const Headline = ({ title, subtitle }) => {
    return (
        <Grid container style={{
            justifyContent: 'center',
            borderBottom: '2px solid #2E3B55',
            marginTop: '30px',
        }}>

            <Box style={{
                fontWeight: 'bold',
                fontSize: '20px',
                textTransform: 'uppercase',
                color: '#2E3B55',
                marginRight: '10px'
            }}>
                {title}
            </Box>

            <Box style={{
                fontWeight: 'bold',
                fontSize: '20px',
                textTransform: 'uppercase',
                color: '#55607D',
            }}>
                {subtitle}
            </Box>

        </Grid>
    )
}

export default Headline
