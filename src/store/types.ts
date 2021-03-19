export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCHING_PRODUCT_LOADING = "FETCHING_PRODUCT_LOADING";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_TRL_LIST = "FETCH_TRL_LIST";
export const FETCH_TRL_ERROR = "FETCH_TRL_ERROR";
export const FETCH_SITE_CONFIG = "FETCH_SITE_CONFIG";
export const FETCH_SITE_CONFIG_ERROR = "FETCH_SITE_CONFIG_ERROR";
export const IS_LOADING = "IS_LOADING";


export interface ProductState {
    product: Product | null;
    status: string;
    errorState: boolean;
    successState: boolean;
    error: string | null;
    trlList: TrlList | null;
    siteConfig: SiteConfig | null;
    isLoading: boolean;
}

export interface TrlList {
    id?: string,
    name: string,
    description?: string
}


export interface Product {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: ProductType;
    categories: ProductCategory[];
    implementationEffortText: string;
    investmentEffort: string;
    trl: TRL;
    user: User;
    company: ProductCompany;
    businessModels: BusinessModel[];

}

export interface BusinessModel{
    id: number;
    name: string;
}

export interface ProductCompany{
    name: string;
    logo: string;
    address?: Address;
}


export interface Address{
    id: number;
    country: string; ///can also be a complex variable in the future
    state: string;
    city: string;
    street: string;
    house: string;
    zipCode: string;
    longitude: string;
    latitude: string;
    fallbackString: string;
    cityRegion: string;

}

export interface User{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex?: string;
    profilePicture: string;
    position: string;
}

export interface TRL {
    id: number;
    name: string;
    description?: string;
}

export interface ProductType{
    id: number;
    name: string;
}

export interface ProductCategory{
    id: number;
    name: string;
}

export interface SiteConfig{
    id: string;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
}

