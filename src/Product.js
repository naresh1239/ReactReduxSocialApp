import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

const Product = () => {
    const data = useSelector((state)=> state.reducer)
    console.log(data)
  return (
    <>
     <Navbar/>
    <div className={`main-box list`} >

    {
  
       
          <div key={data.id} className="box" >
          <h3 >{data.title}</h3>
          <h3 >Category : {data.type}</h3>
          <p >{data.description}</p>
          <img src={data.thumbnail} alt="hel"></img>
     <div style={{display : "flex" , padding: "5px", alignItems : "center"}}>     <p style={{ margin : "10px"}}>Pirce: {data.price}</p>
          <p >Rating: {data.rating}</p></div>
          </div>
        
    }
    </div>

    </>
  )
}

export default Product