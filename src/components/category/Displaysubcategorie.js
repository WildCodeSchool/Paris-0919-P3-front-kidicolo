import React from 'react'


const DisplaySubcategorie = subcategorys => {
    console.log(subcategorys)
                return ( 
                <div className="containerSubcategory">
                    <p>{subcategorys.subcategorys.name}</p>
                </div>
            )
        }

export default DisplaySubcategorie 

