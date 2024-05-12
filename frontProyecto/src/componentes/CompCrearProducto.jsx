import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://localhost:5000/apli/productos';

const CompCrearProducto = () => {

    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();

    // Funcion de guardar 

    const guardarProducto = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombre:nombre, tipo:tipo, cantidad:cantidad, precio:precio
        })
        navigate('/productos')
    }

    return (

        <div>
            <h3>Guardar nuevo producto</h3>
            <form onSubmit={guardarProducto}>
                <div className="mb-3">

                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control"/>

                </div>
                <div className="mb-3">

                    <label className="form-label">Tipo</label>
                    <input value={tipo} onChange={(e) => setTipo(e.target.value)} type="text" className="form-control"/>

                </div>
                <div className="mb-3">

                    <label className="form-label">Cantidad</label>
                    <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} type="number" className="form-control"/>

                </div>
                <div className="mb-3">

                    <label className="form-label">Precio</label>
                    <input value={precio} onChange={(e) => setPrecio(e.target.value)} type="number" className="form-control"/>

                </div>
                <div className="mb-3">

                </div>

                <button type="submit" className="btn btn-primary"><i class="bi bi-floppy"></i></button>
            </form>

        </div>


    )
};

export default CompCrearProducto;