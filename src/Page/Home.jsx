import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Isloading from './Isloading';
import { Link } from 'react-router-dom';
function Home() {
    const [products,setproduct]=useState([]);
    const [Isloding,setisloding]=useState(true);
    const Fectproduct=()=>{
        fetch("https://api.escuelajs.co/api/v1/products?limit=8&offset=0")
        .then(res=>res.json())
        .then(resp=>
          {
            setproduct(resp)
            setisloding(false)
          });
    }
    useEffect(()=>{
      Fectproduct();
    },[])
  return (
  <>
     <div className="container">
          <div className="row">
              {
               Isloding?
             <>
               <Isloading/>
               <Isloading/>
               <Isloading/>
               <Isloading/>
             </>
               :
               products.map((pro)=>(
                 <div className="col-xl-3 col-lg-4 col-sm-6 g-4">
                   <Link to={`/read/${pro.id}`}>
                    <Card
                          url_img={pro.images}
                          title={pro.title}
                          des={pro.creationAt}
                    />
                   </Link>
                </div>
                ))
              }
          </div>
     </div>
  </>
  )
}

export default Home