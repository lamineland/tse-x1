import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    a: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    
    button: {
        backgroundColor: '#22cc4a',
        width: '100%',
        color: 'white',
        padding: '15px 50px',
        '&:hover': {
          backgroundColor: '#00c02a',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#009120',
          borderColor: 'unset',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        }
        
    }
}))
function LesLiens() {

    // const [backgr, setBackgr] = React.useState('bgDev')

    const classes = useStyles()


    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
              <h1 style={{ color: 'white' }}>Get Started</h1>
                <Box>
                {/* <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} p={2} fontWeight={500} textAlign="center">Dev</Box> */}
                        <Box boxShadow={4} borderRadius={5} mt={3} fontWeight={500} textAlign="center">
                            <NavLink className={classes.a} to="/dev">
                                <Button 
                                    className={classes.button}>Dev</Button>
                            </NavLink>
                        </Box>
                        <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} fontWeight={500} textAlign="center">
                            <NavLink className={classes.a} to="/archi">
                                <Button 
                                    className={classes.button}>Archi</Button>
                            </NavLink>
                        </Box>
                        <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} fontWeight={500} textAlign="center">
                            <NavLink className={classes.a} to="/dostars">
                                <Button 
                                className={classes.button}>Do-stars</Button>
                            </NavLink>
                        </Box>
                </Box>
            </Grid>
        </div>
    )
}

export default LesLiens
