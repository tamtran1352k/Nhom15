import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Products.css";
import { DataProvider } from "../Context";
import Header from "../../containers/Header";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;
    return (
      <>
   

              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src={`${process.env.PUBLIC_URL}/img/img-quangcao/banner0.gif`} className="d-block w-100"  alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={`${process.env.PUBLIC_URL}/img/img-quangcao/banner1.png`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={`${process.env.PUBLIC_URL}/img/img-quangcao/banner2.png`} className="d-block w-100" alt="..."/>
          </div> 
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>       
        </div>
      
      
      <div id="product">
        {products.map((product) => (
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-col-4">
              <div className="card" key={product._id}>
                <Link to={`/product/${product._id}`}>View Details</Link>
                <Link to={`/product/${product._id}`}>
                  <img src={product.src} alt="" />
                </Link>
                <div className="content">
                  <h3>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </h3>
                  <span>${product.price}</span>
                  <p>{product.description}</p>
                  <button onClick={() => addCart(product._id)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div></>
    );
  }
}

export default Products;
