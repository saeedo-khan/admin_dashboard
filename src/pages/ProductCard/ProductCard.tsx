import React from "react";
import { useParams } from "react-router-dom";
import { initProductsRow } from "../../utils/tableRows";
import "./ProductCard.scss";

const ProductCard: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="ProductCards">
      <div className="container-product-card">
        <div className="wrap-top-section">
          <div className="left-card">
            <div className="preview-img">
              <img
                // src={initProductsRow[id].product_image}
                alt="product image"
              />
            </div>
            <div className="upload-image">
              <input type="file" name="upload" />
            </div>
          </div>
          <div className="right-card">
            <form className="form-product">
              <div>
                <label>Product Name</label>
                <input type="text" placeholder="product name" />
              </div>
              <div>
                <label>Category</label>
                <input type="text" placeholder="Men,Watch" />
              </div>
              <div>
                <label>Sales Price</label>
                <input type="number" name="price" />
              </div>
              <div>
                <label>In stock</label>
                <input type="number" name="stock" />
              </div>
              <div>
                <label>Sold</label>
                <input type="number" name="sold" />
              </div>
            </form>
          </div>
        </div>
        <div className="actions-buttons">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
