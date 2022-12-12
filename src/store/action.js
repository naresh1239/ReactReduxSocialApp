export const ADD_TO_CART_ACTION  = (data) =>{

  return{
    
    type : "ADD_TO_CART",
    data : data
  }
}
export const removeToCart  = (data) =>{
    return{
      
      type : "REMOVE_TO_CART",
      data : data
    }
  }
  

export const LIST_PRODUCTS  = () =>{
    return{
      
      type : "LIST_PRODUCTS",
      
    }
  }

  export const ADD_LIST_PRODUCTS  = (data) =>{
    return{
      
      type : "ADD_LIST_PRODUCTS",
      data : data
    }
  }

  export const GetProduct  = (data) =>{
    return{
      
      type : "GetProduct",
      data : data
    }
  }