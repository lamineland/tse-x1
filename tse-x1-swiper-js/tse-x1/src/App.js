import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box } from '@material-ui/core'

import Home from './components/home.component'
import Archi from './components/archi.component'
import Dev from './components/dev.component'
import Dostars from './components/dostars.component'

import LesLiens from './components/enterprise.component'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const useStyles = makeStyles((theme) => ({
  
  thesize: {
    minHeight: '100vh',
    // maxWidth: '100vw',
    // paddingRight: '0px !important',
    // paddingLeft: '0px !important',
    // backgroundColor:'#03a9f4',
  }
  
}));

const App = () => {

  const classes = useStyles()
  const bgDev = "bgDev"

  return (
    <div>
      <Container fluid className={`${classes.thesize} ${bgDev}`}>
        <Router>
          <Navbar variant="dark">
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Terranga Skills Engineering
              </Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#produits">Produits</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
          <Row>
            <Col xs={12} lg={4} xl={6} pt={50}>
              <LesLiens />
            </Col>
            <Col xs={12} lg={8} xl={6}>
              <Grid container direction="column" justify="center" alignItems="center" height="100%">
                <Box width="95%" height="100%" borderRadius={4} boxShadow={6} style={{ overflow: 'hidden' }}> 
                    <Switch>
                      <Route path='/' exact component={Home} />
                      <Route path="/dev" component={Dev}/>
                      <Route path="/archi" component={Archi}/>
                      <Route path="/dostars" component={Dostars}/>
                    </Switch>
                </Box>
              </Grid>
            </Col>
          </Row>
        </Router>
      </Container>
    </div>
  );
}

export default App;
