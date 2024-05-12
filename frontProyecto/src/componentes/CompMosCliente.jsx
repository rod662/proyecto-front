import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/apli/clientes/';

const CompMostrarClientes = () => {

    const [clientes, setClientes] = useState([])
    useEffect (()=> {
        getClientes()
    }, []);

    // Funcíon para mostrar clientes 

    const getClientes = async () => {
        const resul = await axios.get(URL)
        setClientes(resul.data);

    }

    // Funcion eliminar clientes

    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${id}`)
        getClientes();
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to = '/clientes/agregar/' className ='btn btn-success mt-2 mb-2'> <i className="bi bi-person-add"></i> </Link>
                    <table className="table table-borderless">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombres Cliente</th>
                                <th>Apellidos Cliente</th>
                                <th>Cedula</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.cedula}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                        <Link to={`/clientes/editar/${cliente._id}`} className="btn btn-warning mt-2 mb-2">
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <button onClick={() => eliminarClientes(cliente.id)} className="btn btn-danger">
                                            <i className="bi bi-person-x"></i>
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

export default CompMostrarClientes;