import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';
import { FaShoppingCart } from 'react-icons/fa'; // Importamos el icono de carro

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '50%', // botón circular
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px', // Ancho del botón
        height: '60px' // Altura del botón
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad} />
                        : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    <FaShoppingCart size={30} /> {/* Ajustamos el tamaño del icono a 30 */}
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
            </div>
        );
    }
}

export default Carro;
