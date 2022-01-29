import { useEffect, useState } from "react";
import Results from "./Results";

// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [title, updateTitle] = useState("");
  const [categories, updateCategories] = useState([]);
  const [amount, updateAmount] = useState("");
  const [zadania, setZadania] = useState([]);
  const [action_description,updateAction_decsription] = useState("");
  const [action_short_description,updateAction_short_decsription] = useState("");

  // useEffect(()=>{

  //   fetch(`https://api.npoint.io/3f77545257d8fcd44ade?title=${title}&categories=${categories}&amount=${amount}&action_description=${action_description}&action_short_description=${action_short_description}`)
  //   .then(res=>res.json())
  //   .then(data=>setZadania(data))
      
  //    },[])

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `https://api.npoint.io/3f77545257d8fcd44ade?title=${title}&categories=${categories}&amount=${amount}&action_description=${action_description}&action_short_description=${action_short_description}`
    );
    const json = await res.json();

    setZadania(json.zadania);
  }

  return (
    <div className="search-params">
    <h1>{title}</h1>
    <p> {categories}</p>
      <p> {amount} </p>
      <p>{action_description}</p>
      <p>{action_short_description}</p>
        
      <Results zadania={zadania} />
    </div>
  );
};

export default SearchParams;