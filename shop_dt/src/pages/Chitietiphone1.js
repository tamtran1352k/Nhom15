const Chitietiphone1 = () => {
  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row row-cols-1 ">
            <div className="col col-lg-6">
              <img
                src="img/img-iphone/iphone-11-trang-600x600.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col col-lg-6">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Khuyến mãi</div>
                <div className="card-body  w-100">
                  <p className="card-text">
                    Bảo hành 24 tháng (12 tháng chính hãng + 12 tháng bảo hành
                    mở rộng) (Trị giá đến 2 triệu)
                  </p>
                  <p className="card-text">
                    Thu cũ Đổi mới: Giảm đến 2 triệu (Tùy model máy cũ, không
                    kèm các hình thức thanh toán online, mua kèm)
                  </p>
                  <p className="card-text">
                    Nhập mã MOMO100K giảm 2% tối đa 100K khi thanh toán qua Ví
                    Momo
                  </p>
                </div>
              </div>
              <div className="row row-cols-1">
                <div className="col col-lg-9 d-block mx-auto ">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary "
                    style={{ width: "25rem" }}
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 mt-5">
            <div className="col col-lg-8">
              <h2>Thông tin sản phẩm</h2>
              <p className="h5">
                Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong
                đó phiên bản
                <strong className="text-primary"> iPhone 11 64GB </strong> có
                mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như
                <strong className="text-primary">iPhone Xr </strong>ra mắt trước
                đó.
              </p>
              <p>
                <strong className="fw-bold text-secondary h3">
                  Nâng cấp mạnh mẽ về camera
                </strong>
              </p>
              <p>
                Nói về nâng cấp thì camera chính là điểm có nhiều cải tiến nhất
                trên thế hệ iPhone mới.
              </p>
              <p>
                <img
                  src="img/img-iphone/hinhc1.jpg"
                  className="img-fluid"
                  alt="..."                />
              </p>
              <p>
                Nếu như trước đây iPhone Xr chỉ có một camera thì nay với iPhone
                11 chúng ta sẽ có tới hai camera ở mặt sau.
              </p>
              <p>
                <img src="img/img-iphone/hinhc2.jpg"className="img-fluid" alt="..."  />
            </p>
            </div>
            <div className="col col-lg-4 ">
              <h3>Mô Tả Sản Phẩm</h3>
              <table className="table table-striped table-hover mt-3">
                <tbody>
                  <tr>
                    <td>Màn hình:</td>
                    <td colSpan={3}>IPS LCD6.1"Liquid Retina</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành:</td>
                    <td>iOS 15</td>
                  </tr>
                  <tr>
                    <td>Camera sau:</td>
                    <td colSpan={3}>2 camera 12 MP</td>
                  </tr>
                  <tr>
                    <td>Camera trước:</td>
                    <td colSpan={3}>12 MP</td>
                  </tr>
                  <tr>
                    <td>Chip:</td>
                    <td colSpan={3}>Apple A13 Bionic</td>
                  </tr>
                  <tr>
                    <td>RAW:</td>
                    <td colSpan={3}>4G</td>
                  </tr>
                  <tr>
                    <td>Dung lượng lưu trữ:</td>
                    <td colSpan={3}>64 GB</td>
                  </tr>
                  <tr>
                    <td>SIM:</td>
                    <td colSpan={3}>1 Nano SIM &amp; 1 eSIMHỗ trợ 4G</td>
                  </tr>
                  <tr>
                    <td>Pin, Sạc:</td>
                    <td colSpan={3}>3110 mAh18 W</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chitietiphone1;
