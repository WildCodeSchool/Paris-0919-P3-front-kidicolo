import React from 'react'
import './DisplaySubcategorie.css'

const DisplaySubcategorie = subcategorys => {
                return ( 
                <div className="containerSubcategory">
                    <p className="subcategory">{subcategorys.subcategorys.name}</p>
                </div>
            )
        }

export default DisplaySubcategorie 