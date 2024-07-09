import React from 'react';
import { Container } from 'reactstrap';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';


const Index = () => (
    <Container className='d-block p-0' style={{ maxWidth:'100%' }}>
        <Home />
        <About />
        <About />
        <About />
        <About />
    </Container>
);
    

export default Index;