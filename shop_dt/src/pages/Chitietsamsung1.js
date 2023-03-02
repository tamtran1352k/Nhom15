const Chitietsamsung1 = () => {
  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col col-lg-6">
              <img
                src={`${process.env.PUBLIC_URL}img/img-samsung/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg`}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col col-lg-6">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Khuyến mãi</div>
                <div className="card-body w-100">
                  <p className="card-text">
                    Tặng gói Bảo hiểm mở rộng Samsung Care+ 6 tháng
                  </p>
                  <p className="card-text">Ưu đãi Phòng chờ hạng thương gia</p>
                  <p className="card-text">
                    Trả góp 0% thẻ tín dụng qua Quà tặng Galaxy
                  </p>
                  <p className="card-text">Giảm 5% gói BH Rơi vỡ 12 tháng</p>
                  <p className="card-text">
                    Giảm 30% gói Samsung Care+ 12 tháng
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
                Tại sự kiện Samsung Unpacked thường niên,
                <strong className="text-primary">
                  Samsung Galaxy Z Fold4 256GB
                </strong>
                chính thức được trình làng thị trường công nghệ, mang trên mình
                nhiều cải tiến đáng giá giúp Galaxy Z Fold trở thành dòng điện
                thoại gập đã tốt nay càng tốt hơn.
              </p>
              <p>
                <strong className="fw-bold text-secondary h3">
                  Kiểu dáng gập mở tinh tế tạo nên sự khác biệt
                </strong>
              </p>
              <p>
                Galaxy Z Fold4 (2022) ra mắt với ngoại hình gần như là không đổi
                khi so với Galaxy Z Fold3, nếu bạn chỉ nhìn bề ngoài thì bạn sẽ
                khó lòng phân biệt được 2 sản phẩm này. Máy vẫn sử dụng khung
                viền Armor Aluminum bền bỉ, mặt kính màn hình phụ là Corning
                Gorilla Glass Victus+, mặt kính màn hình chính là Ultra Thin
                Glass.
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}img/img-samsung/hinh a1.jpg`}
                  alt="..."
                  className="img-fluid"
                />
              </p>
              <p>
                Và đây cũng là chiếc điện thoại gập bền bỉ nhất giới smartphone
                khi kết hợp với khả năng kháng nước chuẩn IPX8, có khả năng ngâm
                trong nước ngọt ở độ sâu tới 1.5 mét trong thời gian tối đa 30
                phút* (máy không có khả năng kháng bụi).
              </p>
            </div>
            <div className="col col-lg-4">
              <h3>Mô Tả Sản Phẩm</h3>
              <table className="table table-striped table-hover mt-3">
                <tbody>
                  <tr>
                    <td>Màn hình:</td>
                    <td colSpan={3}>
                      Dynamic AMOLED 2XChính 7.6" &amp; Phụ 6.2"Quad HD+ (2K+)
                    </td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành:</td>
                    <td>Android 12</td>
                  </tr>
                  <tr>
                    <td>Camera sau:</td>
                    <td colSpan={3}>Chính 50 MP &amp; Phụ 12 MP, 10 MP</td>
                  </tr>
                  <tr>
                    <td>Camera trước:</td>
                    <td colSpan={3}>10 MP &amp; 4 MP</td>
                  </tr>
                  <tr>
                    <td>Chip:</td>
                    <td colSpan={3}>Snapdragon 8+ Gen 1</td>
                  </tr>
                  <tr>
                    <td>RAW:</td>
                    <td colSpan={3}>12G</td>
                  </tr>
                  <tr>
                    <td>Dung lượng lưu trữ:</td>
                    <td colSpan={3}>256 GB</td>
                  </tr>
                  <tr>
                    <td>SIM:</td>
                    <td colSpan={3}>1 Nano SIM &amp; 1 eSIMHỗ trợ 5G</td>
                  </tr>
                  <tr>
                    <td>Pin, Sạc:</td>
                    <td colSpan={3}>4400 mAh25 W</td>
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

export default Chitietsamsung1;
