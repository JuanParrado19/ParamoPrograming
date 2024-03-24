import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';


const Index = () => (
    <Container className='d-block p-0' style={{ maxWidth:'100%' }}>
        <Home />
        <About />
    </Container>
);
    

export default Index;