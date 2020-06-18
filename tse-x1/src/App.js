import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// import logo from './logo.svg';
// import './App.css';

const useStyles = makeStyles((theme) => ({
  
  thesize: {
    minHeight: '100vh',
    // maxWidth: '100vw',
    // paddingRight: '0px !important',
    // paddingLeft: '0px !important',
    backgroundColor:'#03a9f4',
  }
}));

function App() {

  const classes = useStyles()
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
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Produits</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col>
            <Grid container direction="column" justify="center" alignItems="center">
              <h1 style={{ color: 'white' }}>Get Started</h1>
              <Box>
                <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} p={2} fontWeight={500} textAlign="center">Dev</Box>
                <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} p={2} fontWeight={500} textAlign="center">Archi</Box>
                <Box boxShadow={4} bgcolor="background.paper" borderRadius={5} mt={3} p={2} fontWeight={500} textAlign="center">Do-star</Box>
              </Box>
            </Grid>
          </Col>
          <Col>
          <Grid container direction="column" justify="center" alignItems="center">
            <Box> </Box>
          </Grid>
          </Col>
        </Row>
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
