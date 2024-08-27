import {getProductsreducer} from "./Productsreducer";
import { combineReducers } from "redux";

 const rootrducers = combineReducers({
    getproductsdata:getProductsreducer, 
 })

 export default rootrducers;