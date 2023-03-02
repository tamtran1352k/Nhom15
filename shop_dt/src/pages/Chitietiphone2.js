const Chitietiphone2 = () => {
  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col col-lg-6">
              <img
                src="img/img-iphone/iphone-12-tim-1-600x600.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col col-lg-6">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Khuyến mãi</div>
                <div className="card-body w-100">
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
                <div className="col col-lg-9 d-block mx-auto">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary"
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
                Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu
                đến người dùng cũng như iFan thế hệ iPhone 12 series mới với
                hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn,
                hiệu năng đầy mạnh mẽ và một trong số đó chính là
                <strong className="text-primary"> iPhone 12 64GB. </strong>
              </p>
              <p>
                <strong className="fw-bold text-secondary h3">
                  Hiệu năng vượt xa mọi giới hạn
                </strong>
              </p>
              <p>
                Apple đã trang bị con chip mới nhất của hãng (tính đến 11/2020)
                cho iPhone 12 đó là A14 Bionic, được sản xuất trên tiến trình 5
                nm với hiệu suất ổn định hơn so với chip A13 được trang bị trên
                phiên bản tiền nhiệm iPhone 11.
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}img/img-iphone/hinhc3.jpg`}
                  className="img-fluid" alt="..."    />
              </p>
              <p>
                Với CPU Apple A14 Bionic, bạn có thể dễ dàng trải nghiệm mọi tựa
                game với những pha chuyển cảnh mượt mà hay hàng loạt hiệu ứng đồ
                họa tuyệt đẹp ở mức đồ họa cao mà không lo tình trạng giật lag.
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}img/img-iphone/hinhc4.jpg`}
                  className="img-fluid"
                  alt="..."
                />
              </p>
            </div>
            <div className="col col-lg-4">
              <h3>Mô Tả Sản Phẩm</h3>
              <table className="table table-striped table-hover mt-3">
                <tbody>
                  <tr>
                    <td>Màn hình:</td>
                    <td colSpan={3}>OLED6.1"Super Retina XDR</td>
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
                    <td colSpan={3}>Apple A14 Bionic</td>
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
                    <td colSpan={3}>1 Nano SIM &amp; 1 eSIMHỗ trợ 5G</td>
                  </tr>
                  <tr>
                    <td>Pin, Sạc:</td>
                    <td colSpan={3}>2815 mAh20 W</td>
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

export default Chitietiphone2;
