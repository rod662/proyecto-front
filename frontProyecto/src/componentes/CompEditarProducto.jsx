import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/apli/productos';

const CompEditarProductos = () => {

    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Funcion actualizar

    const editarProducto = async (e) => {
        e.preventDefault();
        await axios.put(`${URL}/${id}`, {
            nombre:nombre, tipo:tipo, cantidad:cantidad, precio:precio
        })
        navigate('/productos');
    }
    useEffect(()=> {
        getProductosID();

    }, []);
    const getProductosID = async () => {
      const resul =  await axios.get(`${URL}/${id}`,)
      setNombre(resul.data.nombre)
      setTipo(resul.data.tipo)
      setCantidad(resul.data.cantidad)
      setPrecio(resul.data.precio)
    }

    return(


        <div>
             <h3>Editar Producto</h3>
            <form onSubmit={editarProducto}>
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

                <button type="submit" className="btn btn-primary"><i className="bi bi-floppy2-fill"></i></button>
            </form>


        </div>

    )

};

export default CompEditarProductos;