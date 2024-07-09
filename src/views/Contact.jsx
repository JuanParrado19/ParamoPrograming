import React from 'react';
import { Container } from 'reactstrap';
import Form from '../components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => (
    <Container className='d-flex pt-5' style={{ maxWidth: '100%' }}>
        <Container className='pt-5 m-3'>
            <h1 className=' no-seleccionable'>
                ¡ habla con nosotros y discutamos tu <span style={{ color: 'blue' }}>siguiente</span> paso al exito !
            </h1>
            <Container>
                <p className='bodytext m-2 p-2 mt-5'>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" color='blue' />  ParamoPrograming@gmail.com
                </p>
                <Container className='p-2 rounded border border-primary' style={{ backgroundColor: 'rgba(33,59,167,0.3)' }}>
                    <p className='bodytext m-2'>
                        <FontAwesomeIcon icon="fa-solid fa-phone" color='blue' />  +57 320 846 2025
                    </p>
                </Container>
                <p className='bodytext m-2 p-2'>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" color='blue' />  Bogotá, Colombia
                </p>
            </Container>
            <Container className='d-flex m-2 p-2 pt-5'>
                <a href='https://www.instagram.com/paramoprograming?igsh=ZWwxMjdqeGw0ZjFm&utm_source=qr' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-instagram" color='blue' size='2x'/></a>
            </Container>
        </Container>
        <Container className='rounded m-3 mt-5 p-3' style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <Form />
        </Container>

    </Container>
);



export default Contact;