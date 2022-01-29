import { Component } from "react";
import { useParams} from "react-router-dom";

const {id}=useParams;

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      // `https://api.npoint.io/3f77545257d8fcd44ade?id=${this.props.match.params.id}`
      `https://api.npoint.io/3f77545257d8fcd44ade?id=${id}`
    );
    const json = await res.json();
    this.setState({
      loading:false,
      name:json.zadania[0].name
    })
    // this.setState(Object.assign({ loading: false }, json.zadania[0]));
    }

  render() {
    // if (this.state.loading) {
    //   return <h2>loading … </h2>;
    // }

    const {
        title,
        categories,
        amount,
        image,
        action_description,
        action_short_description
    } = this.state;

    return (
      <div className="details">
        <img {...image} />
        <div>
          <h1>{title}</h1>
          <p> {categories}</p>
          <p> {amount} </p>
          <p>{action_description}</p>
          <p>{action_short_description}</p>
        </div>
      </div>
    
    );
  }
}

export default Details;