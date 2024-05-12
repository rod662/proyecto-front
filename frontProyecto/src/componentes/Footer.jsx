import React from "react";
import redes from "../img/redes.png"


const Footer = () => {
    return (
        <div className="table-responsive-sm">
            <footer className="card-body">
                <h4 className="card-title">Direccion calle 121 #64 - 25</h4>
                <p className="card-text">correo: industriasrg@gmail.com - telefonos 601-5254854 - 31212312121</p>
                <img src={redes} className="App-logo1" alt="logo"/>

            </footer>
            <p className="card-footer text-muted">Horario: Lunes - viernes 8am - 7pm</p>
            
        </div>
    )
};

export default Footer;