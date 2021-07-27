import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const NabBar = () => {

    const history = useHistory();

    return (
        <AppBar
            style={{ background: '#2E3B55' }}
            position='sticky'
        >
            <Toolbar>

                <Button onClick={()=>history.push('/')} color='inherit'>
                    <Typography>Moda Shop</Typography>
                </Button>

            </Toolbar>

        </AppBar>
    )
}

export default NabBar
