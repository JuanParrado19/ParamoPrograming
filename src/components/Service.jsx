import React from 'react';
import { Container } from 'reactstrap';


const Service = ({ description, image,alignment,title }) => {
    const alignmentClass = alignment === 'right' ? 'flex-row' : 'flex-row-reverse';

    return (

        <section id="start" className={`d-flex pb-5 align-items-center justify-content-center bg-white ${alignmentClass}`}>
            <Container>
                <h1 className='text-dark py-5'>{title}</h1>
                <p className='bodytext'>{description}</p>
            </Container>
            <Container>
                <img src={image} className='img-fluid' />
            </Container>

        </section>
    );

};

export default Service;