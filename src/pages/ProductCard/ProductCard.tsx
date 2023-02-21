import React from "react";
import "./ProductCard.scss";
interface ProductCardProps {}

const ProductCard: React.FC<ProductCardProps> = ({}) => {
  return (
    <div className="ProductCards">
      <div className="container">
        <div className="wrap-top-section">
          <div className="left-card">
            <div className="preview-img">
              <img
                src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
