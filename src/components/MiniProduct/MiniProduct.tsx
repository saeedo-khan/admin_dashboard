import React from "react";
import "./MiniProduct.scss";
import { Rating } from "@mui/material";

interface MiniProductProps {
  title: string;
  rating: number;
  productImg: string;
  price: number;
}

const MiniProduct: React.FC<MiniProductProps> = ({
  title,
  rating,
  productImg,
  price,
}) => {
  return (
    <div className="MiniProduct">
      <div className="product-img">
        <img src={productImg} alt="product-1" />
      </div>
      <div className="product-data">
        <p>{title}</p>
        <div>
          <Rating name="size-medium" defaultValue={rating} readOnly />
        </div>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
};

export default MiniProduct;
