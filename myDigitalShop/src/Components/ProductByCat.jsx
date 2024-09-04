import React from 'react'
import { productData } from '../Data'


function ProductByCat() {
  return (
    <>
      <section>
        <div className="container">
            <h2 className='py-2 fw-bold'>Products</h2>
            <div className="row">
                {productData.slice(0,4).map((a)=>(
                    <div className="col-lg-3" key={a}>
                        <img className='w-100' src={a.images} alt="" />
                        <p className='py-2 fw-bold'>{a.title}</p>
                        <button className='btn btn-primary btn-sm'> Add to Cart</button>
                    </div>

                ))}
                
            </div>
        </div>
      </section>
    </>
  )
}

export default ProductByCat
