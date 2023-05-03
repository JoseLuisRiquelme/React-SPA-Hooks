import {useParams} from "react-router-dom"
import { useContext,useEffect,useState } from "react";
import Context from "../context/Context"
import{Button} from "react-bootstrap"



const Detalle=()=>{
    const {id}=useParams()
    const{pizzas,setPizzas,carro,setCarro,detail, setDetail}=useContext(Context)
    useEffect(()=>{
        console.log(pizzas)
    },[])
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
   

    return(<div style={{display:"flex", border:"0.1px solid gray", margin:"5px", borderRadius:"5px"}}>
    {detail? detail.map(pizza=><><img src={pizza.img} style={{width:"30%", margin:"15px"}}/><div><h2>{pizza.name}</h2><hr></hr><p>{pizza.desc}</p><p><span style={{fontWeight:"bold"}}>Ingredientes:</span><ul>{pizza.ingredients.map(val=><li style={{margin:"2px"}}><span role="img" aria-label="dog">🍕</span>{val}</li>)}</ul></p><div style={{display:"flex", justifyContent:"space-between"}}><h2 style={{fontSize:"18px", color:"black", display:"flex",justifyContent:"center"}}>Precio: ${pizza.price.toLocaleString('es-CL')}</h2><Button variant="danger"style={{width:"15%", margin:"5px"}} onClick={()=>{handleClick(pizza.id)}}>Anadir<span role="img" aria-label="dog">🛒</span></Button></div></div></>):<p>Loading</p>}

    </div>)
}

export default Detalle;