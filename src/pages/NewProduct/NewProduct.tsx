import React, { useState } from "react";
import "./NewProduct.scss";
const NewProduct: React.FC = ({}) => {
  const [newProduct, setNewProduct] = useState({
    product_image: "",
    product_name: "",
    category: "",
    price: 0,
    stock: 0,
    sold: 0,
  });

  function handleChangeProduct(e: React.ChangeEvent<HTMLInputElement>) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }
  function submitNewProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(newProduct);
  }
  return (
    <div className="new-product">
      <div className="container">
        <h1 className="new-product-title">New Product</h1>
        <form
          method="POST"
          className="new-product-form"
          onSubmit={submitNewProduct}
        >
          <div className="new-product-item">
            <label>Image</label>
            <input
              type="file"
              id="file"
              name="product_image"
              onChange={handleChangeProduct}
            />
          </div>
          <div className="new-product-item">
            <label>Name</label>
            <input
              type="text"
              placeholder="Apple Watch"
              name="product_name"
              onChange={handleChangeProduct}
            />
          </div>
          <div className="new-product-item">
            <label>Category</label>
            <input
              type="text"
              placeholder="Men, Shoes"
              name="category"
              onChange={handleChangeProduct}
            />
          </div>
          <div className="new-product-item">
            <label>Price</label>
            <input type="number" name="price" onChange={handleChangeProduct} />
          </div>
          <div className="new-product-item">
            <label>Stock</label>
            <input type="number" name="stock" onChange={handleChangeProduct} />
          </div>
          <div className="new-product-item">
            <label>Sold</label>
            <input type="number" name="sold" onChange={handleChangeProduct} />
          </div>
          <div className="new-product-item">
            <button className="create-product" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
