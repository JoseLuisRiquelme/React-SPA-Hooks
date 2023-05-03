import { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {useNavigate } from "react-router";




const Pizza=()=>{
    const {pizzas,setPizzas, carro, setCarro}=useContext(Context)
    console.log(pizzas)
   // const pizzasSelecteds= pizzas.filter(val=>val.selected===true) 
   
   useEffect( ()=>{

        
        console.log("ejecutando")
    },[pizzas])

    useEffect( ()=> {
        console.log(carro)
    },[carro.length < 0, ])

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

    const handleClick2=(id)=>{
        const pizza = pizzas.find(pizza=> pizza.id === id)
        const pizzaDelCarro = carro.find(pizza=> pizza.id === id)
        const carroActualizado = carro.map(pizza => {
            if(pizza === pizzaDelCarro ) {
                return {
                    ...pizza,
                    count: pizza.count -1
                }
            }
            return {
                ...pizza,
            }
        }).filter(pizza=>pizza.count>0)

        setCarro(
            carroActualizado
        )
    }
    
    useEffect(()=>{
        console.log(carro)
    },[carro])
    const valores= carro? carro.map(pizzas=>pizzas.price*pizzas.count):1
    
    const sum2 =valores ? Object.values(valores).filter(val => typeof val === 'number').reduce((acc, val) => acc + val, 0) : 0;

    
    return(<div className="home-class" style={{margin:"15px"}}>
    <h2>Detalles del pedido:</h2>
    {carro? carro.map(pizzas=><section><div style={{display:"flex", justifyContent:"space-between"}}><div><img src={pizzas.img} style={{width:"100px", margin:"5px"}}/><span style={{alignContent:"initial", fontWeight:"bold"}}>{pizzas.name}</span></div><div><span style={{color:"green", margin:"3px"}}>${(pizzas.count*pizzas.price).toLocaleString('es-CL')}</span><Button variant="danger" style={{margin:"3px"}} onClick={()=>{handleClick2(pizzas.id)}}>-</Button><span style={{margin:"3px"}}>{pizzas.count}<Button variant="primary" onClick={()=>{handleClick(pizzas.id)}} style={{margin:"3px"}}>+</Button></span></div></div><hr style={{color:"black", }}></hr></section>)
    :<p>Loading..</p>}
    <h2>Total:${
    sum2.toLocaleString('es-CL')}</h2>
    <Button variant="success">Ir a Pagar</Button>
    </div>)
}

export default Pizza;