import {takeEvery, put} from "redux-saga/effects"
import {LIST_PRODUCTS} from './const'
import {ADD_LIST_PRODUCTS} from './const'
import data from "../DB.json"
function* fetchdata(){
  console.log(data.profile)
    // let jsondata = yield fetch("http://localhost:3000/profile")
    // let sdata =  yield jsondata.json()
    yield put({type : ADD_LIST_PRODUCTS , data : data.profile})

      }
function* SagaProductList(){

yield takeEvery( LIST_PRODUCTS , fetchdata)

        
}

export default SagaProductList