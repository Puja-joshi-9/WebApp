import React from 'react'
import Product from './product.json'
import './productStyle.css'

function product() {
  
  const productList=Product.map(
    product=>(
    <a className="card" key={product.id}>
      <img src={product.image} alt={product.id} style={{width:'71px',heiht:'140px',marginTop:'15px'}} />
      <div className="container">
        <h4 style={{fontSize:'14px',fontWeight:"normal"}}>{product.name}</h4>
        <p>{product.price}</p>
      </div>
      </a>
    // {/* <div className="col s2 mdc-card "  className="col s3" > 
  // <div className="mdc-card__primary-action center-align" tabindex="0">
   
          // <img className="" src={product.image} alt={product.id} width="100px" height="130px"/>          
          // {/* <h5 dangerouslySetInnerHTML={{__html: product.description}}/> */}
          // {/* <!-- content within actionable area --> */}
  // {/* </div> */}
  // {/* <!-- ... content ... --> */}
//           {/* <p style={fontStyle} className="center-align">{product.name}</p>
//           <p style={fontStyle} className="center-align">{product.name}</p>
// </div> */}
    )
)

    return(
      <>
      <div>
      <div class="subtitle fancy"><span>Our Products</span></div>
      <div className="row">
      {productList}
      </div>
      </div>
      </>
    )
}

export default product
