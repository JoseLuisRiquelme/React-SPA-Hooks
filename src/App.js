
import './App.css';
import Context from "./context/Context";
import { useEffect, useState } from "react";
import Home from './views/Home';
import pizzasData from './components/pizzas.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './views/Pizza';
import Detalle from './views/Detalle';


function App() {
  const [pizzas,setPizzas] = useState(pizzasData.map(val=>{return{...val,selected:false,name:val.name.charAt(0).toUpperCase() + val.name.slice(1)}})) 
  const [carro, setCarro]=useState([])
  const[detail,setDetail]=useState([])
  const globalState = { pizzas, setPizzas, carro, setCarro, detail,setDetail }
 //useEffect(()=>{setPizzas(pizzas)},[pizzas])
 console.log(pizzas)
  return (
    <div className="App">
       <Context.Provider value={globalState}>
        <BrowserRouter>
        <Nav/>
        <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/carrito' element={<Pizza/>}/>
       <Route path="/pizza/:id" element={<Detalle/>}/>
       </Routes>
       </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
