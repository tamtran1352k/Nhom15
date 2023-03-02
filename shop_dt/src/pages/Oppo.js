import React from "react";
import { Link } from "react-router-dom";
const Oppo = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row row-cols-1  mb-3 ">
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}img/img-oppo/hinh1.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4">
                    <Link
                      to="/Chitietoppo1"
                      className="nav-link me-3 text-info"
                    >
                      <strong>OPPO Find X5 Pro 5G</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Snapdragon 8 Gen 1
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
                    <strong>+</strong> Pin 5000 mAh, Sạc 80 W
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 mt-5">
              <div className="card mb-4 rounded-0 h-100">
                <div className="card-body">
                  <img
                    src={`${process.env.PUBLIC_URL}img/img-oppo/hinh2.jpg`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietoppo2"
                      className="nav-link me-3 text-info"
                    >
                      <strong>OPPO Reno7 series</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Snapdragon 695 5G
                    <br />
                    <strong>+</strong> RAM: 8 GB
                    <br />
                    <strong>+</strong> Dung lượng: 128 GB
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
                    src="img/img-oppo/hinh3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <p className="mt-4 ">
                    <Link
                      to="/Chitietoppo1"
                      className="nav-link me-3 text-info"
                    >
                      <strong>OPPO A96</strong>
                    </Link>
                  </p>
                  <p>
                    <strong>+</strong> Chip Snapdragon 680
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
                    <strong>+</strong> Pin 5000 mAh, Sạc 33 W
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

export default Oppo;
