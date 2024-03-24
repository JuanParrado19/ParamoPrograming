import React from 'react';
import { Container } from 'reactstrap';

const Home = () => (
    <section id="hero" className="d-flex align-items-center justify-content-center">
        <video className="w-100" autoPlay muted loop id="myVideo" style={{ zIndex:'-1' }} >
            <source src="src/assets/video/bgvideo.mp4" type="video/mp4"/>
        </video>
        <Container className="container position-absolute" style={{ padding:'5vh' }} >
            <h1 className="text-center linearGradient mb-0 NameLogo">PÁRAMO PROGRAMING</h1>
            <p className="text-end mr-5 text-white html" style={{ paddingRight:'3vw' }} >¡ Desarrollo de cima y a la medida !</p>
        </Container>
    </section>
);

export default Home;