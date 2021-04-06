import React from "react";

import "./ProductInfo.css";

interface ProductInfoProps {
  title: string | undefined;
  type: string | undefined;
}

const ProductInfo = ({ title, type }: ProductInfoProps) => {
  return (
    <div className="productInfo-container">
      <div className="productInfo-content">
        <div className="productInfo-title">
          <p>Title</p>
          <h4>{title}</h4>
        </div>
        <div className="productInfo-type">
          <p>Type</p>
          <h4>{type}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
