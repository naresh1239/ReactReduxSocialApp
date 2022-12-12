import { ADD_TO_CART } from "./const";
import { REMOVE_TO_CART , LIST_PRODUCTS,GetProduct} from "./const";
export const reducer = (data = [], action) =>{
 switch (action.type) {
    case ADD_TO_CART: 
    console.log('hiii i got called by u ')
    data = [...data ,action.data]
        return  data
    
        case REMOVE_TO_CART :
         data = data.filter((e)=> e.id != action.data)
             return data;
         case GetProduct : {

            return action.data
         }
            
    default: return data;

 }
}