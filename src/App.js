import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Details from "./Details";
import Tworzeniezad from "./tworzeniezad";
import SearchParams from "./SearchParams";
import Results from "./Results";


const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element ={<Details />}>
           
          </Route>
          <Route path="/" element ={<SearchParams />}>
           
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
