import { FETCH_PRODUCT, FETCHING_PRODUCT_LOADING, ProductState, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR, FETCH_TRL_LIST, FETCH_SITE_CONFIG, FETCH_SITE_CONFIG_ERROR, IS_LOADING } from "../types";
import { ProductActionType } from "../actionTypes/productActionTypes";



const initialState: ProductState = {
    error: null,
    errorState: false,
    successState: false,
    status: "",
    product: null,
    trlList: null,
    siteConfig: null,
    isLoading: false
}

const ProductReducer = (state = initialState, action: ProductActionType) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case FETCH_TRL_LIST:
            return {
                ...state,
                trlList: action.payload
            }
        case FETCH_SITE_CONFIG:
            return {
                ...state,
                siteConfig: action.payload
            }
        case FETCH_SITE_CONFIG_ERROR:
            return {
                ...state,
                payload: action.payload
            }
        case FETCHING_PRODUCT_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                successState: true,
                status: action.payload
            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                errorState: true,
                error: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer;