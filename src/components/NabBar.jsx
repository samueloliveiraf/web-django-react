import { AppBar, Toolbar,Typography } from '@material-ui/core'
import React from 'react'

const NabBar = () => {
    return (
        <AppBar style={{ background: '#2E3B55' }} position='sticky'>

            <Toolbar>
                <Typography>Moda Shop</Typography>
            </Toolbar>
            
        </AppBar>
    )
}

export default NabBar
