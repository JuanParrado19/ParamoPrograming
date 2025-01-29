import React from 'react';
import Service from '../components/Service'


const Services = () => (
    <div className='d-block p-0 pt-5' style={{ maxWidth: '100%' }}>
        <Service description="Our IT experts are delivering a range of IT services to our customers and alleviating technology
                challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure."
            image="./src/assets/Service.jpeg"
            alignment="right"
            title="Desarrollo de Software"
        />
        <Service
            description="Al Sharq Technology provides you with all cyber security
             services that secure your business, websites, and systems with high 
             efficiency, raising the level of information security you have in work networks, systems, and websites."
             image="./src/assets/Service2.jpeg"
             alignment="left"
             title="Paginas Web"
        />
        <Service
            description="Our IT experts are delivering a range of IT services to our customers and alleviating technology challenges regarding core IT infrastructure. We help you establish a reliable IT infrastructure."
             image="./src/assets/Service2.jpeg"
             alignment="right"
             title="Seguridad Informática"
        />

    </div>
);


export default Services;