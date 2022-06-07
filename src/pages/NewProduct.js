import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UseAuthContext } from "../context/auth_context";
import jwt from "jwt-decode";

const NewProduct = () => {
  const { token } = UseAuthContext();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    review: 1,
    companyId: "799a8ad0-68d8-455b-aa1b-69aece7a197d",
    categoryId: "799a8ad0-68d8-455b-aa1b-68aece7a197d",
  });

  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", newProduct, {
        headers: { Authorization: token },
      })
      .then(() => {
        setNewProduct({
          name: "",
          description: "",
          price: "",
          stock: "",
          review: 1,
          companyId: "799a8ad0-68d8-455b-aa1b-69aece7a197d",
          categoryId: "799a8ad0-68d8-455b-aa1b-68aece7a197d",
        });

        history.push("/");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "stock") {
      setNewProduct({ ...newProduct, [name]: Number(value) });
    } else if (name === "price") {
      setNewProduct({ ...newProduct, [name]: Number(value) });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <div className="center">
      <h1>Add new product</h1>
      <form onSubmit={submitForm}>
        <div className="txt_field">
          <input
            name="name"
            type="text"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Name</label>
        </div>
        <div className="txt_field">
          <input
            name="description"
            type="text"
            value={newProduct.phoneNumber}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Description</label>
        </div>
        <div className="txt_field">
          <input
            name="price"
            type="number"
            value={newProduct.street}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Price $</label>
        </div>
        <div className="txt_field">
          <input
            name="stock"
            type="number"
            value={newProduct.number}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Stock</label>
        </div>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewProduct;
