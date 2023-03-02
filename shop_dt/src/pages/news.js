import React from "react";
import { Link } from 'react-router-dom';
import Footer from './footer';
const New = () => {
    return ( 
        <div>
            <div className="container">
                <h2 className="text-danger text-center mt-3">Tin Tức</h2>
                <div className="row row-cols-1  g-4 mt-3">
                    <div className="col col-lg-9">
                        <div className="card ">
                            <div className="row row-cols-1 g-0">
                                <div className="col col-lg-6">
                                    <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638114679565067599_oppo-reno8t-5g.webp`} className="img-fluid rounded-start" alt="..." />
                                    <Link to="#" className="card-link text-decoration-none text-dark link-danger fw-bolder">Chỉ còn 2 ngày để đặt trước OPPO Reno8T 5G, đặt ngay để nhận quà tặng đến 1.59 triệu đồng</Link>
                                    <p className="mt-2">0 - 1 tuần trước</p>
                                </div>
                                <div className="col col-lg-6 gx-4">
                                    <div className="row row-cols-1">
                                        <div className="col col-lg-5">
                                            <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638013392536581282_hasp-oppo-reno8-pro-5g-9.webp`} className="img-fluid rounded-start w-100" alt="..." />
                                        </div>
                                        <div className="col col-lg-7">
                                            <Link to="#" className="card-link text-decoration-none text-dark link-danger fw-bolder">Chỉ còn hôm nay để đặt trước OPPO Reno8 Pro, đặt ngay để không bỏ lỡ quà tặng đến 2.79 triệu</Link>
                                            <p className="mt-1">0 - 4 tháng trước</p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 mt-2">
                                        <div className="col col-lg-5">
                                            <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638000723527684043_bidv-thumb-01.webp`} className="img-fluid rounded-start w-100" alt="..." />
                                        </div>
                                        <div className="col col-lg-7">
                                            <Link to="#" className="card-link text-decoration-none text-dark link-danger fw-bolder">FPT Shop giảm ngay 2.000.000 đồng khi đặt cọc iPhone 14 Series bằng thẻ tín dụng BIDV</Link>
                                            <p className="mt-1">1503 - 4 tháng trước</p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-1 mt-2">
                                        <div className="col col-lg-5">
                                            <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/637999715986018278_750x500.webp`} className="img-fluid rounded-start w-100" alt="..." />
                                        </div>
                                        <div className="col col-lg-7">
                                            <Link to="#" className="card-link text-decoration-none text-dark link-danger fw-bolder">FPT Shop giảm đến 3 triệu đồng cho khách hàng đặt cọc iPhone 14 Series và thanh toán bằng thẻ TPBank EVO Trusting Social</Link>
                                            <p className="mt-1">0 - 4 tháng trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h5 className="card-title">Sản Phẩm Mới</h5>
                            </div>
                            <div className="card-body ">
                                <div className="row row-cols-1 ">
                                    <div className="col col-lg-4">
                                        <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638109492836018083_oppo-reno8-t-5g-dd-moi.webp`} className="img-fluid " alt="" />
                                    </div>
                                    <div className="col col-lg-8">
                                        <h6>OPPO Reno8 T 5G 128GB</h6>
                                        <Link to="#" className="card-link link-danger text-decoration-none text-primary">22 bài viết</Link>
                                    </div>
                                </div>
                                <div className="row row-cols-1 mt-2">
                                    <div className="col col-lg-4">
                                        <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638109356938776451_samsung-galaxy-s23-ultra-xanh-dd-bh.webp`} className="img-fluid " alt="" />
                                    </div>
                                    <div className="col col-lg-8">
                                        <h6>
                                            Samsung Galaxy S23 Ultra 5G 256GB</h6>
                                        <Link to="#" className="card-link link-danger text-decoration-none text-primary">143 bài viết</Link>
                                    </div>
                                </div>
                                <div className="row row-cols-1 mt-2">
                                    <div className="col col-lg-4">
                                        <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638109400939907860_samsung-galaxy-s23-dd-vang-bh.webp`} className="img-fluid " alt="" />
                                    </div>
                                    <div className="col col-lg-8">
                                        <h6>Samsung Galaxy S23 5G 256GB</h6>
                                        <Link to="#" className="card-link link-danger text-decoration-none text-primary">129 bài viết</Link>
                                    </div>
                                </div>
                                <div className="row row-cols-1 mt-2">
                                    <div className="col col-lg-4">
                                        <img src={`${process.env.PUBLIC_URL}/img/img-tintuc/638107858632184994_iphone-14-pro-dd-1.webp`} className="img-fluid " alt="" />
                                    </div>
                                    <div className="col col-lg-8">
                                        <h6>iPhone 14 Pro 128GB</h6>
                                        <Link to="#" className="card-link link-danger text-decoration-none text-primary">103 bài viết</Link>
                                    </div>
                                </div>   
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="row row-cols-1 g-0 ">
                        <div className="col col-lg-5">
                            <img src="img/img-tintuc/638116163690028518_750x500.webp" className="img-fluid rounded-start h-75 w-100" alt="..." />
                        </div>
                        <div className="col col-lg-7">
                            <div className="card-body">
                                <Link to="#" className="card-link link-danger text-decoration-none fw-bolder h5">FPT Shop tặng ưu đãi đến 1.000.000 đồng cho khách hàng mở thẻ đồng thương hiệu TPBank</Link>
                                <p className="mt-3">
                                    Từ nay, khi khách hàng chọn mở thẻ đồng thương hiệu TPBank EVO by Trusting Social thành công và thanh toán mua các sản phẩm Apple tại FPT Shop sẽ được tặng ngay ưu đãi 20% tối đa 1.000.000 đồng, giảm giá trực tiếp và có thể được hoàn tiền tới 10% (Tối đa 500.000 đồng).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 g-0 ">
                        <div className="col col-lg-5">
                            <img src="img/img-tintuc/638119049007156558_750x500.webp" className="img-fluid rounded-start h-75 w-100" alt="..." />
                        </div>
                        <div className="col col-lg-7">
                            <div className="card-body">
                                <Link to="#" className="card-link link-danger text-decoration-none fw-bolder h5">"Kiss Day - Nhận quà ngay", FPT Shop giảm thêm 1,42 triệu cho đồng hồ thông minh</Link>
                                <p className="mt-3">
                                    Duy nhất ngày 14/02/2023, FPT Shop giảm thêm 1.420.000 đồng khi mua một cặp đồng hồ thông minh bất kỳ dành cho các cặp đôi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 g-0 ">
                        <div className="col col-lg-5">
                            <img src="img/img-tintuc/638115586115815100_moi.webp" className="img-fluid rounded-start h-75 w-100" alt="..." />
                        </div>
                        <div className="col col-lg-7">
                            <div className="card-body">
                                <Link to="#" className="card-link link-danger text-decoration-none fw-bolder h5">FPT Shop chính thức nhận đặt trước OPPO Reno8 T 5G, tặng quà đến 1,59 triệu đồng</Link>
                                <p className="mt-3">
                                    Từ nay đến 10/02/2023, khách hàng chọn đặt trước OPPO Reno8 T 5G tại FPT Shop sẽ nhận được quà tặng ấn tượng trị giá đến 1.590.000 đồng cùng ưu đãi trả góp 0% lãi suất.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 g-0 ">
                        <div className="col col-lg-5">
                            <img src="img/img-tintuc/638116201335090800_thumb.webp" className="img-fluid rounded-start h-75 w-100" alt="..." />
                        </div>
                        <div className="col col-lg-7">
                            <div className="card-body">
                                <Link to="#" className="card-link link-danger text-decoration-none fw-bolder h5">Chào mùa yêu, nhiều sản phẩm công nghệ và gia dụng giảm đến 50% tại FPT Shop</Link>
                                <p className="mt-3">
                                    Từ ngày 10/02 - 14/02/2023, FPT Shop triển khai chương trình ưu đãi cuối tuần vô cùng hấp dẫn trị giá đến 50% cho nhiều sản phẩm công nghệ và gia dụng.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>    
            </div>
        
        </div>
        
     );
}
 
export default New;