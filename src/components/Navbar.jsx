import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Context from '../context/Context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Nav=()=>{
  const setActiveClass=({isActive})=>(isActive? "active":"inActive");
  const {pizzas,setPizzas, carro, setCarro}=useContext(Context)
  const valores= carro? carro.map(pizzas=>pizzas.price*pizzas.count):1
    
    const sum2 =valores ? Object.values(valores).filter(val => typeof val === 'number').reduce((acc, val) => acc + val, 0) : 0;
    return(
        <Navbar  variant="dark" style={{backgroundColor:"#17A2B8", display:"flex",flexDirection:"column", paddingBottom:"0px"}}>
        <Container style={{display:"flex", justifyContent:"space-between"}}>
          <Navbar.Brand href="#home" style={{margin:"5px 10px", textDecoration:"none" }}>
          <NavLink className={ setActiveClass } to="/" style={{textDecoration:"nonen"}}>
          <span role="img" aria-label="dog">🍕</span>Pizzeria Mamma Mia!
          </NavLink>
          </Navbar.Brand>
          <span style={{textDecoration:"none", border:"0.2px solid white", borderRadius:"5px"}}><a href='#' target='_blank'>Link to code</a></span>
          <NavLink className={setActiveClass} to="/carrito">         
          <span  style={{margin:"5px 10px"}}><span role="img" aria-label="dog">🛒</span>${sum2.toLocaleString('es-CL')}</span>         
          </NavLink>
        </Container>
        <div className='backNav' style={{width:"100%", marginBottom:"0px", display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center", paddingTop:"22px", paddingBottom:"12px"}}>
        <h1 style={{color:"white"}}>Pizzeria Mamma Mia!</h1>
        <p style={{color:"white", marginBottom:"0px"}}>Tenemos las mejores pizzas que podras encontrar!</p>
        <hr style={{height:"10px", width:"80%", color:"white"}}></hr>
        </div>
      </Navbar>
    )
}

export default Nav;