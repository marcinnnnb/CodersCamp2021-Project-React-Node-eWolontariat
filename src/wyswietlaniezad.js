import { useEffect, useState } from "react";
import Wolontariusz from './Wolontariusz';



// export default function Wyswietl() {

// const [wolontariusze, setWolontariusze] = useState([]);

// useEffect(() => {
//     Wyswietlaniezad();
//   }, []);

// async function Wyswietlaniezad() {
//     // const res = await fetch(`https://www.npoint.io/docs/d60aef680c98884dc1dewolontariusze=${wolontariusze}`);
//     const res = await fetch('src/wolontariusze.json');
//     const json = await res.json();
  
//     setWolontariusze(json.wolontariusze);
  // }
  
//   {
//     wolontariusze.map((wolontariusz) => (
//       <Wolontariusz name={wolontariusz.name} surname={wolontariusz.surname} nick={wolontariusz.nick} short_description={wolontariusz.short_description} description={wolontariusz.description} image={wolontariusz.image} categories={wolontariusz.categories} actions= {wolontariusz.actions} key={wolontariusz.nick} />
//     ));
//   }

// return(
//     <div>
//     {wolontariusze.map((wolontariusz) => (
//     <Wolontariusz name={wolontariusz.name} 
//     surname={wolontariusz.surname}
//      nick={wolontariusz.nick} 
//      short_description={wolontariusz.short_description}
//      description={wolontariusz.description} 
//      image={wolontariusz.image} 
//      categories={wolontariusz.categories} 
//      actions= {wolontariusz.actions} 
//      key={wolontariusz.nick} 
//     />
//     ))}
//     </div>)

// }

export default function Wyswietl(){

  const [zadania,setZadania]=useState([])

useEffect(()=>{

  fetch('https://api.npoint.io/3f77545257d8fcd44ade')
  .then(res=>res.json())
  .then(data=>setZadania(data))
    
   },[])

return(
  <div>

   {zadania}
  
  </div>
)

}

// {zadania.map(zadanie => (
//   <p key={zadanie.id}>{zadanie.title} </p>
// ))}