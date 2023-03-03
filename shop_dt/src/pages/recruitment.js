import React from "react";
import Footer from "./footer";
import Header from './../containers/Header';
import { useState } from 'react';

const Recruitment = () => {
  const handleClick = () => {
    window.location.href='https://www.topcv.vn/tim-viec-lam-nhan-vien-ban-hang';
  }

  return (
    <>
  <div className="container my-5">
  <div className="row">
    <div className="col-lg-8">
      <h1 className="mb-4">Chào mừng đến với trang tuyển dụng</h1>
      <p className="lead">
        Bạn đang tìm kiếm công việc mới? Hãy xem qua các công việc mới nhất
        của chúng tôi và nộp đơn ngay hôm nay.
      </p>
      <a className="btn btn-primary mt-3" href="#" onClick={handleClick}>
        Tìm việc làm
      </a>
    </div>
    <div className="col-lg-4">
      <img
        src={`${process.env.PUBLIC_URL}/img/img-tuyendung/tuyendung.png`}
        alt="Hình ảnh"
        className="img-fluid"
      />
    </div>
  </div>
</div>
<div className="container my-5">
  <h2 className="mb-4">Các việc làm mới nhất</h2>
  <div className="row">
    <div className="col-lg-4">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img/img-tuyendung/nhanvienbanhang.jpg`} width={400} height={360}
          alt="Hình ảnh"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Nhân viên bán hàng</h5>
          <p className="card-text">
            Cần tuyển nhân viên bán hàng có kinh nghiệm ít nhất 2 năm tại cửa
            hàng bán điện thoại và có phúc lợi.
          </p>
          <a href="#" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img/img-tuyendung/ketoan.jpg`} width={400} height={360}
          alt="Hình ảnh"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Kế toán trưởng</h5>
          <p className="card-text">
            Công ty FPT Shop cần tuyển kế toán trưởng có kinh nghiệm ít nhất 5
            năm trong ngành tài chính.
          </p>
          <a href="#" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img/img-tuyendung/marketing.png`} width={400} height={300}
          alt="Hình ảnh"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Chuyên viên marketing</h5>
          <p className="card-text">
            Công ty cần tuyển chuyên viên marketing có kinh nghiệm ít
            nhất 3 năm trong lĩnh vực marketing.
          </p>
          <a href="#" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container my-5">
  <h2 className="mb-4">Ứng viên mới nhất</h2>
  <div className="row">
    <div className="col-lg-4">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img/img-tuyendung/thu1.gif`} width={400} height={300}
          alt="Hình ảnh"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Nguyễn Văn An</h5>
          <p className="card-text">
            Kinh nghiệm 2 năm làm kế toán tại công ty FPT Shop.
          </p>
          <a href="#" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img/img-tuyendung/thu2.jpg`} width={400} height={300}
          alt="Hình ảnh"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Phạm Văn An</h5>
          <p className="card-text">
            Kinh nghiệm 3 năm làm chuyên viên marketing tại công ty FPT Shop.
          </p>
          <a href="#" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/img/img-tuyendung/thu3.png`} width={400} height={300}
          alt="Hình ảnh"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Trần Thị Bình</h5>
          <p className="card-text">
            Kinh nghiệm 3 năm làm chuyên viên marketing tại công ty FPT Shop.
          </p>
          <a href="#" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container my-5">
  <h2 className="mb-4">Mọi thắc mắc xin liên hệ qua địa chỉ:</h2>
  <div className="row">
    <div className="col-lg-6">
      <p>
        <i className="bi bi-house-fill" /> Địa Chỉ: Công viên phần mềm Quang Trung,
          P.Đông Hưng Thuận, Q.12, TP.Hồ Chí Minh
        <br />
          Email: nmcuongit2@gmail.com
        <br />
        <i className="bi bi-telephone-forward-fill" /> Hotline: 0358184344
        <br />
        <i className="bi bi-telephone-forward-fill" /> Hotline CSKH: 1900 2002
      </p>
    </div>
  </div>
</div>
</>
  )
}

export default Recruitment;