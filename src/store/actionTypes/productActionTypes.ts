import { FETCH_PRODUCT, FETCHING_PRODUCT_LOADING, Product, ProductState, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR, TrlList, FETCH_TRL_LIST, FETCH_TRL_ERROR, FETCH_SITE_CONFIG, SiteConfig, FETCH_SITE_CONFIG_ERROR, IS_LOADING} from "../types";


interface FetchProductAction {
    type: typeof FETCH_PRODUCT
    payload: Product;
}
interface FetchTrlList {
    type: typeof FETCH_TRL_LIST
    payload: TrlList;
}

interface FetchingProductLoadingAction {
    type: typeof FETCHING_PRODUCT_LOADING,
    payload: boolean;
}

interface FetchProductSuccess {
    type: typeof FETCH_PRODUCT_SUCCESS,
    payload: string;
}

interface FetchProductError {
    type: typeof FETCH_PRODUCT_ERROR,
    payload: string
}

interface FetchTrlError{
    type: typeof FETCH_TRL_ERROR,
    payload: string
}

interface FetchSiteConfig {
    type: typeof FETCH_SITE_CONFIG,
    payload: SiteConfig;
}


interface FetchSiteConfigError{
    type: typeof FETCH_SITE_CONFIG_ERROR
    payload: string;
}

interface IsLoadingApp{
    type: typeof IS_LOADING
    payload: boolean;
}


export type ProductActionType = FetchProductAction | FetchingProductLoadingAction | FetchProductSuccess  | FetchProductError | FetchTrlList | FetchTrlError | FetchSiteConfig | FetchSiteConfigError | IsLoadingApp;