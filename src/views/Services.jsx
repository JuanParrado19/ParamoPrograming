import React from "react";
import Service from "../components/Service";
import PageTransitions from "../components/PageTransitions";

const Services = () => (
  <PageTransitions>
    <div className="container mx-auto px-4 mt-20">
      <Service
        imageSrc="https://picsum.photos/800/800"
        title="Desarrollo Web"
        description="Desarrollamos páginas web y landing pages utilizando las tecnologías más modernas del mercado, enfocándonos en crear sitios rápidos, intuitivos y visualmente atractivos que ofrecen una experiencia de usuario excepcional."
        imagePosition="left"
      />

      <Service
        imageSrc="https://picsum.photos/200/300"
        title="Desarollo de Software"
        description="Desarrollamos software empresarial ágil y escalable en busqueda de crear aplicaciones robustas y de alto rendimiento. Usamos de las mejores prácticas lo que nos permite ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio. "
        imagePosition="right"
      />
    </div>
  </PageTransitions>
);

export default Services;
