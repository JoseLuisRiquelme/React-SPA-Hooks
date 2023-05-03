import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext, useState,useEffect } from "react";
import Context from "../context/Context";
import {useNavigate } from "react-router-dom";




const Home=()=>{
    
    const {pizzas,setPizzas, carro, setCarro,detail, setDetail}=useContext(Context)
    const[pizzasHome,setPizzasHome]=useState(pizzas)

    useEffect(() => {
        console.log(carro, 1)
    }, [carro])
    
    const navigate=useNavigate()
const gotoPizza=(id)=>{
    const pizzaDetail = pizzas.filter(pizza=> pizza.id === id)
    setDetail(pizzaDetail)
    console.log("detailPizza")
    console.log(pizzaDetail)
    navigate(`/pizza/${id}`)
}
     
    console.log(pizzas)
    useEffect(()=>{
    
        console.log("runinghome-effect");
    },[pizzasHome])

    const handleClick= (id)=>{
        const pizza = pizzas.find(pizza=> pizza.id === id)
        const pizzaDelCarro = carro.find(pizza=> pizza.id === id)
        if(pizzaDelCarro === undefined) {
            setCarro(
                carro.concat({
                    ...pizza,
                    count:1
                })
            )
            return
        }
        const carroActualizado = carro.map(pizza => {
            if(pizza === pizzaDelCarro ) {
                return {
                    ...pizza,
                    count: pizza.count + 1
                }
            }
            return {
                ...pizza,
            }
        })

        setCarro(
            carroActualizado
        )
        

    }
  

    return(
        <div className="home-class">
                <Container >
                        <Row className="align-items-center" >
                            {pizzasHome? pizzasHome.map(pizza => <Col lg={4} md={12} className="my-4">
                                <Card style={{backgroundColor:"white", padding:"0"}}>
                                    <Card.Img variant="top" src={pizza.img} style={{margin:"auto",marginTop:"15px", borderRadius:"10px",height:"50%", border:"0.2px solid gray", justifyContent:"center", alignItems:"center", width:"90%"}}/>
                                        <Card.Body style={{borderRadius:"10px", margin:"4px 20px"}} >
                                            <Card.Title style={{fontFamily:'Dancing Script', fontSize:"30px"}}>{pizza.name}</Card.Title>
                                            <hr></hr>
                                            <Card.Text >                                   
                                                <h6>Ingredientes:<ul>{pizza.ingredients.map(val=><li style={{margin:"2px"}}><span role="img" aria-label="dog">🍕</span>{val}</li>)}</ul></h6>
                                                <hr style={{width:"100%"}}></hr>
                                                <div >                                               
                                                <h5 style={{fontSize:"18px", color:"black", display:"flex",justifyContent:"center"}}>$ {pizza.price.toLocaleString('es-CL')}</h5>
                                                
                                                </div>
                                            </Card.Text>
                                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                            <Button variant="info" style={{color:"white"}} onClick={()=>{gotoPizza(pizza.id)}}>Ver mas<span role="img" aria-label="dog">👀</span></Button>
                                            <Button variant="danger"style={{width:"40%"}} onClick={()=>{handleClick(pizza.id)}}>Anadir<span role="img" aria-label="dog">🛒</span></Button>
                                             </div>                                       
                                        </Card.Body>
                                </Card>
                 
                            </Col>):<p>Loading...</p>}
                        </Row>
            </Container>
        </div>
    )
}

export default Home;