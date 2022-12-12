import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from './store/action'
import Navbar from './Navbar'
const Cart = () => {
    const data = useSelector((state)=>state.reducer)
    const dispatch = useDispatch()
    console.log(data)
    let total = 0
  return (

    <>
    <Navbar/>
<table id="customers">
  <tr>
    <th>Title</th>
    <th>About</th>
    <th>Type</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
{
 data.length > 0  ?    data?.map((e)=>{
        total += e.price
        return(

        
        <tr key={e.id}>
        <td>{e.title}</td>
        <td>{e.description}</td>
        <td>{e.type}</td>
        <td>{e.price}</td>
        <td>     <button onClick={()=>dispatch(removeToCart(e.id))}>remove to card</button></td>
      </tr>
        )
    }) : <div className='notice'>
         <h1>Please Add Someting 😅 </h1>
         <h1>YOUR CART IS EMPTY </h1>
    </div>
}

 <tr>Your Total Amount Is :     {Math.floor(total)} RS 🤑</tr>
</table>

<div>

</div>

</>
  )
}

export default Cart