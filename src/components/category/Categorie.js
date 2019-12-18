import React, {Component} from "react"
import axios from "axios"
import Displaysubcategorie from "./DisplaySubcategorie"

class Categorie extends  Component {
    state = {
      subcategory: []
    };
  
    getSubcategory() {
      axios.get(`/category/subcat/1`)
        .then(res => {
          this.setState({ subcategory: res.data })
        });
    }
    componentDidMount() {
      this.getSubcategory()
    }
  
    render() {
      // console.log(this.state.subcategory)
      return (
        <div>
          <div className="containerSubcategory">
            {this.state.subcategory.map(subcategorys => (
              < Displaysubcategorie subcategorys={subcategorys} key={subcategorys.id} />
            ))
            }
          </div>
        </div>
      );
    }
  }
  
  export default Categorie