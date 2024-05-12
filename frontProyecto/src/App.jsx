
import './App.css'
import CompMostrarClientes from './componentes/CompMosCliente'
import CompMostrarProductos from './componentes/CompModProd'
// Importar router 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompCrearClientes from './componentes/CompCrearCliente'
import CompCrearProducto from './componentes/CompCrearProducto'
import CompEditarClientes from './componentes/CompEditarCliente'
import CompEditarProductos from './componentes/CompEditarProducto'
import Header from './componentes/ComponenteHeader'
import Footer from './componentes/Footer'


function App() {
  

  return (
    
      <div>
        <Header />
        <BrowserRouter>
        <Routes>
        <Route path='/clientes/' element = {<CompMostrarClientes />} />
        <Route path='/clientes/agregar/' element = {<CompCrearClientes />} />
        <Route path='/clientes/editar/:id' element = {<CompEditarClientes />} />
        <Route path='/productos/' element = {<CompMostrarProductos />} />
        <Route path='/productos/agregar/' element = {<CompCrearProducto />} />
        <Route path='/productos/editar/:id' element = {<CompEditarProductos />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      
   
  )
}

export default App
