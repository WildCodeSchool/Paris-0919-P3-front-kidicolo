import React, {Component} from "react"
import axios from "axios"
import Displaysubcategorie from "./Displaysubcategorie"

class Categorie extends Component {
    state = {
      subcategory: []
    };
  
    getSubcategory() {
      const name = this.props.match.params.name
      axios.get(`/subcat/${name}`)
        .then(res => {
          this.setState({ subcategory: res.data })
        });
    }

    componentDidMount() {
      this.getSubcategory()
    }
  
    render() {
      console.log(this.state.subcategory)
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