import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box } from '@material-ui/core'

import MenuBar from './components/nav.component'
import Home from './components/home.component'
import Archi from './components/archi.component'
import Dev from './components/dev.component'
import Dostars from './components/dostars.component'

import About from './components/about.component'
import Projets from './components/about.component'
import Produits from './components/produits.component'
import Contact from './pages/contact.page'

import LesLiens from './components/enterprise.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const useStyles = makeStyles((theme) => ({
  
  thesize: {
    minHeight: '100vh',
    // maxWidth: '100vw',
    // paddingRight: '0px !important',
    // paddingLeft: '0px !important',
    // backgroundColor:'#03a9f4',
  },
  rowStyle: {
    margin: '0 auto',
    alignItems: 'center',
    padding: '70px 0',
  }
  
}));

const App = () => {

  const classes = useStyles();
  const bgArchi = 'bgDev'

  return (
    <div>
      <Container fluid className={`${classes.thesize} ${bgArchi}`}>
        <Router>
          <MenuBar />
          <Row className={classes.rowStyle}>
            <Col xs={12} lg={4} xl={6} pt={50}>
              <LesLiens />
            </Col>
            <Col xs={12} lg={8} xl={6}>
              <Grid container direction="column" justify="center" alignItems="center" height="100%">
                <Box width="95%" height="100%" borderRadius={4} boxShadow={6} style={{ overflow: 'hidden' }}> 
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/dev" component={Dev} />
                    <Route path="/archi" component={Archi} />
                    <Route path="/dostars" component={Dostars} />
                    <Route path="/about" component={About} />
                    <Route path="/produits" component={Produits} />
                    <Route path="/projets" component={Projets} />
                    <Route path="/contact" component={Contact} />
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
