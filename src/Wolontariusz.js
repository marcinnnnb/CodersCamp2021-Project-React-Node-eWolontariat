const Wolontariusz = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.surname}</h2>
        <h2>{props.nick}</h2>
        <h2>{props.short_description}</h2>
        <h2>{props.description}</h2>
        <h2>{props.image}</h2>
        <h2>{props.categories}</h2>
        <h2>{props.actions}</h2>
        
      </div>
    );
  };
  
  export default Wolontariusz;