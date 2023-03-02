const Chitietsamsung2 = () => {
  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row row-cols-1 ">
            <div className="col col-lg-6">
              <img
                src="img/img-samsung/sam-sung-galaxy-a23-5g-den-thumb-600x600.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="col col-lg-6">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header">Khuyến mãi</div>
                <div className="card-body  w-100">
                  <p className="card-text">Giảm 5% gói BH Rơi vỡ 12 tháng</p>
                  <p className="card-text">
                    Nhập mã MOMO100K giảm 2% tối đa 100K khi thanh toán qua Ví
                    Momo
                  </p>
                  <p className="card-text">
                    Giảm 40% gói Samsung Care+ 12 tháng
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
                <strong className="text-primary">
                  Samsung Galaxy A33 5G 6GB{" "}
                </strong>
                ra mắt vào ngày 17/03, được xem là bản cập nhật khá lớn so với
                thế hệ tiền nhiệm Galaxy A32 về thiết kế đến thông số kỹ thuật
                bên trong, nhằm mang đến vẻ ngoài đẹp mắt cũng như cạnh tranh
                trực tiếp ở phần hiệu năng đối với các đối thủ cùng phân khúc
                giá.
              </p>
              <p>
                <strong className="fw-bold text-secondary h3">
                  Diện mạo trẻ trung và năng động
                </strong>
              </p>
              <p>
                Galaxy A33 có cạnh viền được chế tạo từ nhựa nhằm tối ưu khối
                lượng, mang lại cảm giác cầm nắm nhẹ nhàng, các cạnh được bo
                cong mềm mại giúp mình sử dụng lâu dài mà không thấy xuất hiện
                tình trạng cấn tay.
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}img/img-samsung/hinha2.jpg`}
                  alt="..."
                  className="img-fluid"
                />
              </p>
            </div>
            <div className="col col-lg-4 ">
              <h3>Mô Tả Sản Phẩm</h3>
              <table className="table table-striped table-hover mt-3">
                <tbody>
                  <tr>
                    <td>Màn hình:</td>
                    <td colSpan={3}>Super AMOLED6.4"Full HD+</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành:</td>
                    <td>Android 12</td>
                  </tr>
                  <tr>
                    <td>Camera sau:</td>
                    <td colSpan={3}>Chính 48 MP &amp; Phụ 8 MP, 5 MP, 2 MP</td>
                  </tr>
                  <tr>
                    <td>Camera trước:</td>
                    <td colSpan={3}>13 MP</td>
                  </tr>
                  <tr>
                    <td>Chip:</td>
                    <td colSpan={3}>Exynos 1280</td>
                  </tr>
                  <tr>
                    <td>RAW:</td>
                    <td colSpan={3}>6G</td>
                  </tr>
                  <tr>
                    <td>Dung lượng lưu trữ:</td>
                    <td colSpan={3}>128 GB</td>
                  </tr>
                  <tr>
                    <td>SIM:</td>
                    <td colSpan={3}>
                      2 Nano SIM (SIM 2 chung khe thẻ nhớ)Hỗ trợ 5G
                    </td>
                  </tr>
                  <tr>
                    <td>Pin, Sạc:</td>
                    <td colSpan={3}>5000 mAh25 W</td>
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

export default Chitietsamsung2;
