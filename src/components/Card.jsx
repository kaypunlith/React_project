import React from 'react'

function Card(props) {
  const {url_img,title,des}=props;
  return (
   <>
      <div class="card" style={{width:'17rem'}}>
      <img src={url_img} class="card-img-top" alt="..."/>
       <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{des}</p>
        <a href="#" class="btn btn-dark">Go somewhere</a>
    </div>
    </div>
   </>
  )
}

export default Card
