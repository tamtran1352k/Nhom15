import React from "react";
import Footer from "./footer";

import Header from "../containers/Header";

const Contact = () => {
  return (
    <>
  <header className="fixed-top bg-light shadow">
  
        {/* <div className="col-sm-5 pt-md-4 pt-lg-0 col-md-4 col-lg-3 pb-2 pb-md-0">
          <form action="#" className="search-wrap">
            <div className="input-group mb-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập từ cần tìm..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-danger"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search" /> Search
              </button>
            </div>
          </form>
        </div> */}
      
  </header>
 
  <section>
  </section>
  <section className="bg-light">
    <div className="container">
      <div className="row pb-3">
       
        <div className="col">
          <h4> Liên Hệ Với Chúng Tôi </h4>
          <form action="">
            <textarea
              className="w-100 form-control"
              name=""
              id=""
              cols={30}
              rows={3}
              placeholder="Nội dung"
              defaultValue={""} />{" "}
            <br />
            <input
              className="w-100 mt-2 form-control"
              type="text"
              placeholder="Tên bạn *" />
            <div className="row mt-3">
              <div className="col-6">
                <input
                  className="w-100 form-control"
                  type="email"
                  placeholder="Email *" />
              </div>
              <div className="col-6">
                <input
                  className="w-100 form-control"
                  type="tel"
                  placeholder="Điện thoại *"/>
              </div>
            </div>
            <p className="mt-4 text-center text-md-end">
              <input
                className="btn btn-info"
                type="button"
                defaultValue="GỬI NGAY"/>
              <input
                className="btn btn-info"
                type="reset"
                defaultValue="NHẬP LẠI"/>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="ratio ratio-16x9">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.415049880967!2d106.62764101446838!3d10.856002860689152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529deaaaaaaab%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8OybiAoU2FpR29uVGVjaCk!5e0!3m2!1sen!2s!4v1674109004847!5m2!1sen!2s"
  width={300}
  height={300}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" />
    </div>
  </section>
  
  
</>

  )
}

export default Contact;