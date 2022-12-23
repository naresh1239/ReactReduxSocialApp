import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {LIST_PRODUCTS, ADD_TO_CART_ACTION,removeToCart } from "./store/action"
import ReactPaginate from 'react-paginate';
import {GetProduct} from "./store/action"
import {useNavigate } from 'react-router-dom'
const Main = () => {
  const [theme, settheme] = useState("")
  
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const dispatch = useDispatch()
  const [pageSize, setpageSize] = useState(1)
  // const addToCart = useDispatch()
  // const removeToCart = useDispatch()
  const result = useSelector((state)=>state.product  )

let Navigate = useNavigate()
  useEffect(() => {

    dispatch(LIST_PRODUCTS())
    let data = localStorage.getItem('gridthem')
    settheme(data)
  }, [])

const list = () =>{
  localStorage.setItem('gridthem' ,'list');
  let data = localStorage.getItem('gridthem')
  settheme(data)

}
const grid = () =>{
  localStorage.setItem('gridthem' ,'grid');
  let data = localStorage.getItem('gridthem')
  settheme(data)
}
  
const porduct = (e,data) =>{
  e.stopPropagation()
  dispatch(GetProduct(data))
Navigate(`/product/${data.id}`)
}

const ADD_TO_CART = (data,e) =>{
  console.log(e)

dispatch(ADD_TO_CART_ACTION(data))
}
return (
    <>
      <button className={`homebtn list ${theme == "list" ? "active" : ""}`} onClick={list}>🌈LIST</button><button  className={`homebtn grid ${theme == "grid" ? "active" : ""}`} onClick={grid}>🎪GRID</button>
    <div className={`main-box ${theme}`} >

    {
     result.length > 0  ?  result?.slice(pageSize * 10 - 10 , pageSize * 10).map((e)=>{
        return (
       <>
          <div key={e.id} className="box" onClick={() => porduct(e)} >
          <h3 >{e.title}</h3>
          <h3 >Category : {e.type}</h3>
          <p >{e.description}</p>
          <img src={e.thumbnail} alt="hel"></img>
     <div style={{display : "flex" , padding: "5px", alignItems : "center"}}>     <p style={{ margin : "10px"}}>Pirce: {e.price}</p>
          <p >Rating: {e.rating}</p></div>
          <button className={'homebtn'} onClick={()=>ADD_TO_CART(e)}> ⚡ ADD PRODUCT</button>
          </div>
         
          </>
        )

         
      })  
      
      : ""

    
    }
    </div>

          {
            <div className='pagenationbox'>
                 { pageSize > 1  ?  <button className="pagination" onClick={()=>setpageSize(pageSize - 1)}>Previous</button> : ""}
             
                   
  {  [...Array(Math.floor(result.length / 10 ))].map((e,i)=><button className={`pagination ${pageSize == i + 1 ? "Active" : ""}`} onClick={()=>setpageSize(i + 1)}>{i + 1}</button>)}
                
  { pageSize < result.length / 10  ?  <button className="pagination" onClick={()=>setpageSize(pageSize + 1)}>Next</button> : " " }
    </div>
          }
    </>
  )
}

export default Main