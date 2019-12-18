import React from 'react';
import axios from 'axios';
import DisplaySubcategorie from './DisplaySubcategorie';

class Categorie extends React.Component {
    state = {
        subcategory: []
      };
    
      getSubcategory() {
        axios.get(`/category/subcat/2`)
        .then(res => {
          this.setState({ subcategory : res.data})
        });
      }
      componentDidMount(){
        this.getSubcategory()
      }

      render() {
        console.log(this.state.subcategory)
        return (
          <div>
            <div className="containerUser">
              {this.state.subcategory.map(subcategorys =>(
                < DisplaySubcategorie subcategorys={subcategorys} key={subcategorys.id} />
              ))
              }
            </div>
          </div>
        );
      }
    }

export default Categorie

