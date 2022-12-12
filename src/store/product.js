

export const product = (data = [], action) =>{
 switch (action.type) {

             case "ADD_LIST_PRODUCTS" :


                 return action.data;
 
            
    default: return data;

 }
}