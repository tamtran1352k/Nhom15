const Chitietoppo1 = () => {
  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col col-lg-6">
              <img
                src={`${process.env.PUBLIC_URL}img/img-oppo/hinh1.jpg`}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col col-lg-6">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Khuyến mãi</div>
                <div className="card-body w-100">
                  <p className="card-text">Ưu đãi bảo hành quốc tế</p>
                  <p className="card-text">Giảm 15% gói BH Rơi vỡ 12 tháng</p>
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
                <strong className="text-primary">OPPO Find X5 Pro 5G</strong>có
                lẽ là cái tên sáng giá được xướng tên trong danh sách điện thoại
                có thiết kế ấn tượng trong năm 2022. Máy được hãng cho ra mắt
                với một diện mạo độc lạ chưa từng có, cùng với đó là những nâng
                cấp về chất lượng ở camera nhờ sự hợp tác với nhà sản xuất máy
                ảnh Hasselblad.
              </p>
              <p>
                <strong className="fw-bold text-secondary h3">
                  Tỏa sáng với ngoại hình bắt mắt đầy sang trọng
                </strong>
              </p>
              <p>
                Điều làm mình mê hoặc ngay từ cái nhìn đầu tiên là mặt lưng hết
                sức bóng bẩy, trên phiên bản màu đen thì mình hoàn toàn có thể
                sử dụng máy với công dụng tương tự như một chiếc gương soi tiện
                ích.
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}img/img-oppo/hinhb1.jpg`}
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
                    <td colSpan={3}>AMOLED6.7"Quad HD+ (2K+)</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành:</td>
                    <td>Android 12</td>
                  </tr>
                  <tr>
                    <td>Camera sau:</td>
                    <td colSpan={3}>Chính 50 MP &amp; Phụ 13 MP</td>
                  </tr>
                  <tr>
                    <td>Camera trước:</td>
                    <td colSpan={3}>32 MP</td>
                  </tr>
                  <tr>
                    <td>Chip:</td>
                    <td colSpan={3}>Snapdragon 8 Gen 1</td>
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
                    <td colSpan={3}>
                      2 Nano SIM hoặc 1 Nano SIM + 1 eSIMHỗ trợ 5G
                    </td>
                  </tr>
                  <tr>
                    <td>Pin, Sạc:</td>
                    <td colSpan={3}>5000 mAh80 W</td>
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

export default Chitietoppo1;
