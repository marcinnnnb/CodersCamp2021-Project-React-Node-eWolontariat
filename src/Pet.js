import { Link } from "react-router-dom";

const Zadanie = (props) => {
  const { title, categories, amount, image, action_description, action_short_description, id} = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (image.length) {
    hero = image[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={title} />
      </div>
      <div className="info">
        <h1>{title}</h1>
        <p> {categories}</p>
          <p> {amount} </p>
          <p>{action_description}</p>
          <p>{action_short_description}</p>
      </div>
    </Link>
  );
};

export default Zadanie;