import { useEffect, useState } from "react";

export default function Wyswietl(){

  const [zadania,setZadania]=useState([])

useEffect(()=>{

  fetch('https://api.npoint.io/3f77545257d8fcd44ade')
  .then(res=>res.json())
  .then(data=>setZadania(data))
    
   },[])

return(
  <div>
  

  {zadania.map(zadanie =>(
    <div key={zadanie.id}>
    <h2> {zadanie.title}</h2>
    <p>{zadanie.categories}</p>
    <p>{zadanie.amount}</p>
    <p><img width="300px" src={zadanie.image} /></p>
    <p>{zadanie.action_description}</p>
    <p>{zadanie.action_short_description}</p>
    </div>
    

  ))}
  
  </div>
)

}

