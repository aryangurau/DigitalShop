import React from 'react'
import { catData } from '../Data'
import ProductByCat from '../Components/ProductByCat'

function Home() {
  return (
    <>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <ul class="list-group">
                    {catData.slice(0,9).map((a)=>(

<li class="list-group-item" key={a.slug}>{a.name}</li>

                    ))}
 
 
</ul>



                </div>
                <div className="col-lg-9">
                    <img className='w-100' src="https://img.lazcdn.com/us/domino/09a03719-f90e-4a12-a9f4-ba51fd98a613_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" />
                </div>
            </div>
        </div>
      </section>
      <ProductByCat/>
    </>
  )
}

export default Home
