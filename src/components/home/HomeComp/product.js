import React from 'react'
import Product from './product.json'
import './productStyle.css'

function product() {
  
  const productList=Product.map(
    product=>(
    <div class="card">
      <img src={product.image} alt={product.id} style={{width:'100px',marginTop:'15px'}} />
      <div class="container">
        <h4><b>{product.name}</b></h4>
        <p>{product.price}</p>
      </div>
      </div>
    // {/* <div className="col s2 mdc-card "  className="col s3" > 
  // <div class="mdc-card__primary-action center-align" tabindex="0">
   
          // <img class="" src={product.image} alt={product.id} width="100px" height="130px"/>          
          // {/* <h5 dangerouslySetInnerHTML={{__html: product.description}}/> */}
          // {/* <!-- content within actionable area --> */}
  // {/* </div> */}
  // {/* <!-- ... content ... --> */}
//           {/* <p style={fontStyle} class="center-align">{product.name}</p>
//           <p style={fontStyle} class="center-align">{product.name}</p>
// </div> */}
    )
)

    return(
      <>
      <div className="row">
      {productList}
      </div>
      </>
    )
}

export default product
