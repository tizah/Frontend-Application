import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store";

import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

import "./ProductImage.css";

interface ProductImageProps {
  image: string | undefined;
}

// overwrite style
const modalStyle: any = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
};

const mainStyle: any = {
  app: {
    margin: "120px 0",
  },
  button: {
    backgroundColor: "#408cec",
    border: 0,
    padding: "12px 20px",
    color: "#fff",
    margin: "0 auto",
    width: 150,
    display: "block",
    borderRadius: 3,
  },
};

const ProductImage = ({ image }: ProductImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { siteConfig } = useSelector((state: RootState) => state.product);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="productImage">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="imageDiv"
        onClick={openModal}
      >
        <div className="productImage__buttonContainer">
          <Button
            text={`Change product photo`}
            className="productImage__button"
            style={{
              backgroundColor: siteConfig?.mainColor
                ? siteConfig.mainColor
                : "",
            }}
            onClick={() => {}}
          />
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        styleProp={modalStyle}
      >
        <img
          width="100%"
          style={{ borderRadius: 3 }}
          src={image}
          alt="product_image"
        />

        <button
          style={{
            ...mainStyle.button,
            margin: 0,
            width: "auto",
            marginTop: 10,
          }}
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ProductImage;
