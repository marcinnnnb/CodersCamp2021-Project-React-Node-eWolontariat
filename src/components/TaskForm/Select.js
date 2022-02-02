import React from "react";
import { Typography, Select } from "@material-ui/core";
import Categories from "../../assets/data/Categories";


class SelectCat extends React.Component {
    constructor(props) {
      super(props);
      this.state = '';
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("Category Selected!!");
      this.setState({ categories: e.target.value });
    }
  
    render() {
      return (
          <div className="select-container">
              <Typography variant="body1">Wybierz kategorie: </Typography>
    <Select value={this.state.categories} onChange={this.handleChange} ismulti="true" issearchable="true" > 
       {Categories.map((categories) => (
        <option key={Categories} value={categories.value}>{categories.label}</option> ))} 
        </Select>
          
          </div>
       
      );
    }
  }
  
  export default SelectCat;