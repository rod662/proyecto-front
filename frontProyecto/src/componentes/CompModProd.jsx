import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/apli/productos/';

const CompMostrarProductos = () => {

    const [productos, setProductos] = useState([])
    useEffect (()=> {
        getProductos()
    }, []);

    // Funcíon para mostrar productos 

    const getProductos = async () => {
        const resul = await axios.get(URL)
        setProductos(resul.data);

    }

    // Funcion eliminar clientes

    const eliminarProductos = async (id) => {
        await axios.delete(`${URL}${id}`)
        getProductos();
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to = '/productos/agregar/' className ='btn btn-success mt-2 mb-2'> <i className="bi bi-bag-plus-fill"></i> </Link>
                    <table className="table table-borderless table-responsive">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.tipo}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.precio}</td>
                                    <td>
                                        <Link to={`/productos/editar/${producto._id}`} className="btn btn-warning mt-2 mb-2">
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button onClick={() => eliminarProductos(cliente.id)} className="btn btn-danger">
                                        <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>


            </div>



        </div>
    )
};

export default CompMostrarProductos;