import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Grid, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Swiper from 'react-id-swiper';

import './App.css'

const useStyles = makeStyles((theme) => ({
  
  thesize: {
    minHeight: '100vh',
    // maxWidth: '100vw',
    // paddingRight: '0px !important',
    // paddingLeft: '0px !important',
    backgroundColor:'#03a9f4',
  },

  button: {
    backgroundColor: '#22cc4a',
    width: '100%',
    padding: '15px 50px',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: 'unset',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    
  }
}));

const imgs = [
  `https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
  `https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
]


const App = () => {

  const classes = useStyles()

  const HorizontalSwiperParams = {
    pagination: {
      el: '.swiper-pagination.swiper-pagination-h',
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  };

  const VerticalSwiperParams = {
    hashNavigation: 'true',
    direction: 'vertical',
    slidePerView: 'auto',
    pagination: {
      el: '.swiper-pagination.swiper-pagination-v',
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  };

  return (
    <div>
      <Container fluid className={classes.thesize}>
        <Navbar variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Terranga Skills Engineering
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#produits">Produits</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col>
            <Grid container direction="column" justify="center" alignItems="center">
              <h1 style={{ color: 'white' }}>Get Started</h1>
              <Box>
                {/* <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} p={2} fontWeight={500} textAlign="center">Dev</Box> */}
                <Box boxShadow={4} borderRadius={5} mt={3} fontWeight={500} textAlign="center">
                  <Button className={classes.button} color="white" href="slide1">Dev</Button>
                </Box>
                <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} fontWeight={500} textAlign="center">
                  <Button className={classes.button} color="white" href="slide2">Archi</Button>
                </Box>
                <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} fontWeight={500} textAlign="center">
                  <Button className={classes.button} color="white" href="slide3">Do-stars</Button>
                </Box>
              </Box>
            </Grid>
          </Col>
          <Col>
          <Grid container direction="column" justify="center" alignItems="center" height="100%">
            <Box width="100%" height="100%" borderRadius={4} boxShadow={6} style={{ overflow: 'hidden'}}> 
            <Swiper {...VerticalSwiperParams}>
              <div data-hash="slide1">Horizontal #1</div>
              <div data-hash="slide2">Horizontal #2</div>
              <div>
                <Swiper {...HorizontalSwiperParams}>
                  <div data-hash="slide3">Vertical #1</div>
                  <div>Vertical #2</div>
                  <div>Vertical #3</div>
                  <div>Vertical #4</div>
                </Swiper>
              </div>
              <div>Horizontal #4</div>
              <div>Horizontal #5</div>
            </Swiper>
            </Box>
          </Grid>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
