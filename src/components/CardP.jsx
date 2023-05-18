import React, { useEffect, useState } from "react"; import axios from "axios"
import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardP() {

 const [data,setData] = useState([])
 const [load,setLoad] = useState(false)

 useEffect(()=>{
   
  getData();

 },[])

 const getData = async () =>{
   try{
    const resposta = await axios.get("https://rickandmortyapi.com/api/character")

    setData(resposta.data['results'])
    setLoad(true)



   }
   catch (err){
     alert("errorr")

   }
 }

 


  return (
    <div>
      <div className="container2">
        <div>
          <h1>Rick and Mory</h1>
        </div>
        <div>
          <img src="https://play-lh.googleusercontent.com/fXQVXTma1ENwAFjsxJ4IT6GntBr3RxWP3HMSLbNdvycl-0tscOQEeJIEAmehcNOt5hCp" alt="" className="imgg" />
        </div>
      </div>
      <div className="Container">
        
      {load && data.map((values)=>{
        return(
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={values['image']} className="imgCard"/>
          <Card.Body>
            <Card.Title>{values['name']}</Card.Title>
            <Card.Text>
               Origem: {values['species']} 
            </Card.Text>
            <Button variant="primary">ver especificações</Button>
          </Card.Body>
        </Card>
        )
  
      })}
  
      </div>
    </div>
  );
}
