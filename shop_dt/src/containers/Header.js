import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return ( 
        <nav class="navbar navbar-expand-lg  py-lg-0 px-lg-5  bg-light" data-wow-delay="0.1s">
        <Link to="#" class="navbar-brand ms-4 ms-lg-0">
            <h1 class=" text-primary m-0">FPT<span class="text-secondary">Shop</span></h1>
        </Link>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/home" class="nav-item nav-link active me-3">Trang chủ</Link>
                    <Link to="/new" class="nav-item nav-link me-3">Tin Tức</Link>
                    <Link to="/login" class="nav-item nav-link me-3">Login</Link>
                    <Link to="/register" class="nav-item nav-link me-3">Register</Link>
              
                 
                    <Link to="/product" class="nav-item nav-link me-3">Trang san Pham</Link>
                    <Link to="/cart" class="nav-item nav-link me-3">Trang gio hang</Link>
                    <Link to="/feedback" class="nav-item nav-link me-3">Ý kiến của khách hàng</Link>
             

                    
                    
                      <ul class="navbar-nav" >
                        <li class="nav-item dropdown">
                          <a className="nav-link dropdown-toggle me-3" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sản Phẩm
                          </a>
                          <ul class="dropdown-menu dropdown-menu-light " aria-labelledby="navbarDarkDropdownMenuLink"  style={{ textDecoration: "none" }}  >
                            <Link to="iphone"  style={{ textDecoration: "none" }}><a class="dropdown-item" >Iphone</a></Link>
                            <Link to="samsung"  style={{ textDecoration: "none" }}><a class="dropdown-item" >SamSung</a></Link>
                            <Link to="oppo"  style={{ textDecoration: "none" }}><a class="dropdown-item" >Oppo</a></Link>
                           
                          </ul>
                        </li>
                      </ul>


                      <ul class="navbar-nav" >
                        <li class="nav-item dropdown">
                          <a className="nav-link dropdown-toggle me-3" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Trang Admin
                          </a>
                          <ul class="dropdown-menu dropdown-menu-light " aria-labelledby="navbarDarkDropdownMenuLink"  style={{ textDecoration: "none" }}  >
                            <Link to="/k"  style={{ textDecoration: "none" }}><a class="dropdown-item" >Quản lí Người Dùng</a></Link>
                            <Link to="/mnFeedBack"  style={{ textDecoration: "none" }}><a class="dropdown-item" >Quản Lí FeedBack</a></Link>
                            <Link to="/major"  style={{ textDecoration: "none" }}><a class="dropdown-item" >Quản Lí Sản Phẩm</a></Link>
                           
                          </ul>
                        </li>
                      </ul>
                    <Link to="/event" class="nav-item nav-link me-3">Giới thiệu</Link>
                    <Link to="/tuyendung" class="nav-item nav-link me-3">Tuyển dụng</Link>
                </div>
              
            </div>
			</div>
        </nav>
     );
}
 
export default Header;