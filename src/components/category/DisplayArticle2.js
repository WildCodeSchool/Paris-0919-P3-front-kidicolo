import React from 'react';


const DisplaySub = ({article}) => {
    console.log(article)
                return ( 
                <div className="containerSubcategory">
                    <p>{article.name}</p>
                </div>
            )
        }

export default DisplaySub