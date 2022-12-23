import {takeEvery, put} from "redux-saga/effects"
import {LIST_PRODUCTS} from './const'
import {ADD_LIST_PRODUCTS} from './const'
import data from "../DB.json"
function* fetchdata(){


    let jsondata = yield fetch('https://dummyjson.com/products?limit=100')
    let sdata =  yield jsondata.json()
    yield put({type : ADD_LIST_PRODUCTS , data : sdata.products    })
console.log(sdata)
      }
function* SagaProductList(){

yield takeEvery( LIST_PRODUCTS , fetchdata)

        
}

export default SagaProductList