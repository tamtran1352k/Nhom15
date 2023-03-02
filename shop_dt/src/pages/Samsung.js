import React from "react";
import { Link } from "react-router-dom";

const Samsung = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row row-cols-1  mb-3 ">
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}img/img-samsung/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietsamsung1"
                      className="nav-link me-3 text-info"
                    >
                      <strong>Samsung Galaxy Z Fold4 5G</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Snapdragon 8+ Gen 1
                    <br />
                    <strong>+</strong> RAM: 12 GB
                    <br />
                    <strong>+</strong> Dung lượng: 256 GB
                    <br />
                    <strong>+</strong> Camera sau: Chính 50 MP &amp; Phụ 12 MP,
                    10 MP
                    <br />
                    <strong>+</strong> Camera trước: 32 MP
                    <br />
                    <strong>+</strong> Pin 4500 mAh, Sạc 25 W
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                          src={`${process.env.PUBLIC_URL}img/img-samsung/sam-sung-galaxy-a23-5g-den-thumb-600x600.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietsamsung1"
                      className="nav-link me-3 text-info"
                    >
                      <strong>Samsung Galaxy A33 5G</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Snapdragon 8 Gen 2 8 nhân
                    <br />
                    <strong>+</strong> RAM: 8 GB
                    <br />
                    <strong>+</strong> Dung lượng: 256 GB
                    <br />
                    <strong>+</strong> Camera sau: Chính 200 MP &amp; Phụ 12 MP,
                    10 MP, 10 MP
                    <br />
                    <strong>+</strong> Camera trước: 12 MP
                    <br />
                    <strong>+</strong> Pin 5000 mAh, Sạc 45 W
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}img/img-samsung/Galaxy-S22-Plus-White-600x600.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietsamsung1"
                      className="nav-link me-3 text-info"
                    >
                      <strong>Samsung Galaxy S22+ 5G</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Snapdragon 8 Gen 1
                    <br />
                    <strong>+</strong> RAM: 8 GB
                    <br />
                    <strong>+</strong> Dung lượng: 128 GB
                    <br />
                    <strong>+</strong> Camera sau: Chính 50 MP &amp; Phụ 12 MP,
                    10 MP
                    <br />
                    <strong>+</strong> Camera trước: 10 MP
                    <br />
                    <strong>+</strong> Pin 5000 mAh, Sạc 45 W
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

export default Samsung;
