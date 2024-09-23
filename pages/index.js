import React from 'react';
import '../styles/Home.css'; // Asegúrate de crear un archivo CSS para los estilos

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Vensat Reparaciones S.L.</h1>
      </header>
      <img
        src="ruta/a/tu/imagen.jpg" // Reemplaza con la ruta de la imagen
        alt="Reparaciones de Electrodomésticos"
        className="hero-image"
      />
      <div className="content">
        <h2>50 Años de Experiencia</h2>
        <p>
          Bienvenido a Vensat Reparaciones S.L., tu taller de confianza para reparaciones de electrodomésticos. 
          Con más de 50 años de experiencia, estamos afiliados a Electrolux, lo que nos permite ofrecer un servicio 
          de alta calidad y soluciones efectivas para todos tus problemas de electrodomésticos.
        </p>
        <p>
          Nuestro equipo de profesionales está altamente capacitado y listo para ayudarte. 
          Ofrecemos servicios de reparación, mantenimiento y asistencia técnica, garantizando siempre la satisfacción del cliente.
        </p>
      </div>
    </div>
  );
};

export default Home;

