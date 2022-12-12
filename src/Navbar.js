import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { LIST_PRODUCTS } from './store/action'
const Navbar = () => {
  const data = useSelector((state)=>state.reducer)
  const dispacth = useDispatch()
 const [theme, settheme] = useState('')

const LightTheme = () =>{
localStorage.setItem('theme' ,"Light_Theme");
let data = localStorage.getItem('theme')
settheme(data)

}
const DarkTheme = () =>{
  localStorage.setItem('theme' ,'Dark_Theme');
  let data = localStorage.getItem('theme')
  settheme(data)
}


useEffect(() => {
  document.body.className = theme;
  let data = localStorage.getItem('theme')
  settheme(data)
}, [LightTheme, DarkTheme])

  return (
    <div className='nav' >
      <Link to="/" >APNA SHOPE LITE 🛒</Link>
      <div >

      <button className={`homebtn list ${theme == "Light_Theme" ? "active" : ""}`} onClick={LightTheme}>🌞</button><button  className={`homebtn grid ${theme == "Dark_Theme" ? "active" : ""}`} onClick={DarkTheme}>🌕</button>
      <Link to="/" style={{margin : "10px"}}>🛸 PRODUCTS</Link>
 <Link to="/cart" style={{padding : " 0 10px"}}>🥟CART<sup>{data.length}</sup></Link>

      </div>
    </div>
  )
}

export default Navbar