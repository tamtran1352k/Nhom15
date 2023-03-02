import React from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row row-cols-1  mb-3 ">
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}img/img-iphone/iphone-11-trang-600x600.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietiphone1"
                      className="nav-link me-3 text-info"
                    >
                      <strong>iPhone 11</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Apple A13 Bionic
                    <br />
                    <strong>+</strong> RAM: 4 GB
                    <br />
                    <strong>+</strong> Dung lượng: 64 GB
                    <br />
                    <strong>+</strong> Camera sau: 2 camera 12 MP
                    <br />
                    <strong>+</strong> Camera trước: 12 MP
                    <br />
                    <strong>+</strong> 3110 mAh, Sạc 18 W
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src="img/img-iphone/iphone-12-tim-1-600x600.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietiphone2"
                      className="nav-link me-3 text-info"
                    >
                      <strong>iPhone 12</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Apple A14 Bionic
                    <br />
                    <strong>+</strong> RAM: 4 GB
                    <br />
                    <strong>+</strong> Dung lượng: 64 GB
                    <br />
                    <strong>+</strong> Camera sau: 2 camera 12 MP
                    <br />
                    <strong>+</strong> Camera trước: 12 MP
                    <br />
                    <strong>+</strong>Pin 2815 mAh, Sạc 20 W
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}img/img-iphone/iphone-13-pro-graphite-600x600.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">

                    <Link
                      to="/Chitietiphone2"
                      className="nav-link me-3 text-info"
                    >
                      <strong>iPhone 13 Pro</strong>
                    </Link>

                  </p>
                  <p>
                    <strong>+</strong> Chip Apple A15 Bionic
                    <br />
                    <strong>+</strong> RAM: 6 GB
                    <br />
                    <strong>+</strong> Dung lượng: 512 GB
                    <br />
                    <strong>+</strong> Camera sau: 3 camera 12 MP
                    <br />
                    <strong>+</strong> Camera trước: 12 MP
                    <br />
                    <strong>+</strong> Pin 3095 mAh, Sạc 20 W
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Iphone;
