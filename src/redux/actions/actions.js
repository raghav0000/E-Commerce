import axios from "axios"
import { ADD_TO_CART, DECREASE_QUANTITY_OF_PRODUCT, FETCH_CATEGORY_FAILOUR, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_FAILOUR, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, INCREASE_QUANTITY_OF_PRODUCT, REMOVE_FROM_CART, SET_CURRENT_CATEGORY } from "../contantTypes/constantTypes"

//Categories Action
const fetch_category_request=()=>{
    return {type:FETCH_CATEGORY_REQUEST}
}

const fetch_category_success=(data)=>{
    return {type:FETCH_CATEGORY_SUCCESS,payload:data}
}

const fetch_category_failour=(error)=>{
    return {type:FETCH_CATEGORY_FAILOUR,payload:error}
}

export const fetch_category=()=>{
    return (dispatch)=>{
        dispatch(fetch_category_request());
        var p = axios.get('https://dummyjson.com/products/categories');
        p.then((response)=>{
            var data= response.data;
            dispatch(fetch_category_success(data));
        },(error)=>{
            var err=error.message;
            dispatch(fetch_category_failour(err));
        })
    }
}

export const set_category=(category)=>{
    return {type:SET_CURRENT_CATEGORY, payload:category}
}

//Products Action
const fetch_product_request=()=>{
    return {type:FETCH_PRODUCT_REQUEST}
}

const fetch_product_success=(data)=>{
    return {type:FETCH_PRODUCT_SUCCESS,payload:data}
}

const fetch_product_failour=(error)=>{
    return {type:FETCH_PRODUCT_FAILOUR,payload:error}
}

export const fetch_product=()=>{
    return (dispatch)=>{
        dispatch(fetch_product_request());
        var p = axios.get('https://dummyjson.com/products');
        p.then((response)=>{
            var data= response.data.products;
            dispatch(fetch_product_success(data));
        },(error)=>{
            var err=error.message;
            dispatch(fetch_product_failour(err));
        })
    }
}

//Cart Actions
export const add_to_cart=(p)=>{
    return{type:ADD_TO_CART, payload:p}
}
export const remove_to_cart=(p)=>{
    return{type:REMOVE_FROM_CART, payload:p}
}
export const increase_quantity=(p)=>{
    return{type:INCREASE_QUANTITY_OF_PRODUCT, payload:p}
}
export const decrease_quantity=(p)=>{
    return{type:DECREASE_QUANTITY_OF_PRODUCT, payload:p}
}