import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Read() {
   let {id}=useParams();
   const [product,setprodcut]=useState({});
   const Fectproductid=(id)=>{
       fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res=>res.json())
      .then(resp=>setprodcut(resp))
   }
   useEffect(()=>{
      Fectproductid(id);
   },[])
  return (
    <main>
       <h1>{product.title}</h1>
       <p>{product.description}</p>
    </main>
  )
}

export default Read