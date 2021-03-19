import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductImage from "./ProductImage";
import User from "../User/User";
import ProductInfo from "./ProductInfo";
import ProductDescriptionAttribute from "./ProductDescriptionAttribute";
import Map from "../Map/Map";

import ErrorPage from "../Error";

import { RootState } from "../../../store";
import {
  fetchProduct,
  isLoadingProduct,
  fetchProductSuccess,
  fetchProductError,
} from "../../../store/actions/ProductAction";

import "./Product.css";

const Product: FC = () => {
  const {
    product,
    status,
    error,
    errorState,
    successState,
    siteConfig,
  } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoadingProduct(true));
    if (errorState) {
      dispatch(fetchProductError("Error in fetching product"));
    }
    dispatch(fetchProduct());
    dispatch(isLoadingProduct(false));
    return () => {};
  }, [dispatch, successState, errorState]);

  return (
    <div className="product__container">
      {/* product info */}
      {errorState ? (
        <ErrorPage />
      ) : (
        <React.Fragment>
          <div className="product">
            <ProductImage image={product?.picture} />
            <ProductInfo title={product?.name} type={product?.type.name} />
            <ProductDescriptionAttribute
              productDescription={product?.description}
              categories={product?.categories}
              businessModels={product?.businessModels}
              trl={product?.trl}
            />
          </div>
          <div
            className="user__map"
            style={{ display: siteConfig?.hasUserSection ? "block" : "none" }}
          >
            {/* user info and map */}
            <User
              profilePicture={product?.user.profilePicture}
              firstName={product?.user.firstName}
              lastName={product?.user.lastName}
              backgroundImage=""
              position={product?.user.position}
              email={product?.user.email}
            />
            <Map
              latitude={product?.company.address?.latitude}
              longitude={product?.company.address?.longitude}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Product;
