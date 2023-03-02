import React from "react";
import Main from "./main";
import Footer from "./footer";

const Home = () => {
    return ( 
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
        <Main/>
    
      </div>
      
      

      
    );
}
 
export default Home;