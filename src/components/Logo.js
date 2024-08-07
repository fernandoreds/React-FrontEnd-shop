import { Component } from "react";
import { FaStore } from 'react-icons/fa'; // Importamos el icono de tienda

const styles = {
    logo: {
        fontFamily: 'Poppins, sans-serif', // Cambiamos la fuente aquí
        fontWeight: '700',
        fontSize: '3rem', // Hacemos el logo más grande
        display: 'flex',
        alignItems: 'center',
        gap: '10px' // Espacio entre el icono y el texto
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                <FaStore size={40} /> {/* Icono de tienda con tamaño ajustado */}
                Verduleria
            </div>
        )
    }
}

export default Logo;
