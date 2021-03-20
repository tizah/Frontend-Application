import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { RootState } from "..";
import { ProductActionType } from "../actionTypes/productActionTypes";
import {
    FETCH_PRODUCT,
    FETCHING_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_TRL_LIST,
    FETCH_TRL_ERROR,
    FETCH_SITE_CONFIG,
    FETCH_SITE_CONFIG_ERROR,
    IS_LOADING
} from "../types";

export const fetchProduct = (): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: true
            })
            const product = await axios.get(`https://api-test.innoloft.com/product/${process.env.REACT_APP_PRODUCT_ID}/`).then(res => {
                return res.data;
            });
                 dispatch({
                type: IS_LOADING,
                payload: false
            })
            dispatch({
                type: FETCH_PRODUCT,
                    payload: product 
            });
            dispatch({
                type: FETCH_PRODUCT_SUCCESS,
                payload: "fetched product Successfully"
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: FETCH_PRODUCT_ERROR,
                payload: error.message
            })
        }
    }
}

export const isLoadingApp = (loading: boolean): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
        try {
            dispatch({
                type: IS_LOADING,
                payload: loading
            })
        } catch (error) {
            console.log(error)
             dispatch({
                type: IS_LOADING,
                 payload: loading
            })
        }
    }
}



//Fetching the list of TRL's
export const fetchTrlList = (): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
        try {
                     dispatch({
                type: IS_LOADING,
                payload: true
            })
                const trlList = await axios.get("https://api-test.innoloft.com/trl/").then(res => {
                    return res.data;
                });
                 dispatch({
                type: IS_LOADING,
                payload: false
            })

                 dispatch({
                type: FETCH_TRL_LIST,
                    payload: trlList 
            }); 
            } catch (error) {
                  console.log(error);
            dispatch({
                type: FETCH_TRL_ERROR,
                payload: "error fetching trl list"
            })
            }
    }
}


export const fetchSiteConfig = (id?: string): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
  
        try {
                       dispatch({
                type: IS_LOADING,
                payload: true
            })
                const siteConfig = await axios.get(`https://api-test.innoloft.com/configuration/${id}/`).then(res => {
                    return res.data;
                });
                 dispatch({
                type: IS_LOADING,
                payload: false
            })

                 dispatch({
                type: FETCH_SITE_CONFIG,
                    payload: siteConfig
            }); 
            } catch (error) {
                  console.log(error);
            dispatch({
                type: FETCH_SITE_CONFIG_ERROR,
                payload: "error fetching site configuration"
            })
            }
    }
}






export const isLoadingProduct = (value: boolean): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
        dispatch({
            type: FETCHING_PRODUCT_LOADING,
            payload: value
        });
    }
}

export const fetchProductSuccess = (msg: string): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: msg
        })
    }
}

export const fetchProductError = (msg: string): ThunkAction<void, RootState, null, ProductActionType> => {
    return async dispatch => {
        dispatch({
            type: FETCH_PRODUCT_ERROR,
            payload: msg
        })
     }
}