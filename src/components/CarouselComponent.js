import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  carousel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'blur(8px)', // Efecto blur para las imágenes
    transform: 'scale(1.1)', // Escala para evitar bordes visibles
  }
};

const CarouselComponent = () => {
  return (
    <Carousel controls={false} indicators={false} interval={3000} style={styles.carousel}>
      <Carousel.Item>
        <img
          style={styles.img}
          src="public/productos/134981794-vista-de-la-sección-de-frutas-y-verduras-en-el-supermercado.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={styles.img}
          src="public/productos/istockphoto-489190757-612x612.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={styles.img}
          src="public/productos/134981794-vista-de-la-sección-de-frutas-y-verduras-en-el-supermercado.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
