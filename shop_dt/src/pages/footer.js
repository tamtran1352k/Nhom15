import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ marginTop:"5%"}}>
      <section>
        <div className="contaner">
          <div className="row row-cols-1 row-cols-lg-3">
            <div className="col col-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1946.2532250958138!2d108.0452044!3d12.680333!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1677735642042!5m2!1sen!2s"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col col-lg">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">MSSV</th>
                    <th scope="col">Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Nguyễn Như Ý</td>
                    <td>Nam</td>
                    <td>21-0-01206</td>
                    <td>Front-End B</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Trần Thanh Tâm</td>
                    <td>Nam</td>
                    <td>19-0-00038</td>
                    <td>Front-End B</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Nguyễn Mạnh Cường</td>
                    <td>Nam</td>
                    <td>20-0-00072</td>
                    <td>Front-End B</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col col-lg text-center">
              <h3>Chi nhánh TP.Hồ Chí Minh</h3>
              <div className="row row-cols row-cols-2 text-start">
                <div className="col col-lg">
                  <p style={{ fontSize: 12 }}>
                    <i className="bi bi-shop">
                      <b> ShopFPT Q12: CV Quang Trung</b>
                    </i>
                  </p>
                </div>
                <div className="col col-lg">
                  <p style={{ fontSize: 12 }}>
                    <i className="bi bi-shop">
                      <b> ShopFPT Q11: CV Đầm Sen</b>
                    </i>
                  </p>
                </div>
              </div>
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark ">
        <div class="container ">
          <div class="row py-3">
            <div class="col text-white">
              <p class="mb-0">Chúc quý khách một ngày vui vẻ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
