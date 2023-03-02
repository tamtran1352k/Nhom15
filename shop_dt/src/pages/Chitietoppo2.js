const Chitietoppo2 = () => {
    return ( 
<>
 <section className="mt-3">
  <div className="container">
    <div className="row row-cols-1">
      <div className="col col-lg-6">
        <img src="img/img-oppo/hinh2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col col-lg-6">
        <div className="card text-dark bg-light mb-3">
          <div className="card-header">Khuyến mãi</div>
          <div className="card-body w-100">
            <p className="card-text">Giảm 15% gói BH Rơi vỡ 12 tháng</p>
            <p className="card-text">
              Nhập mã MOMO100K giảm 2% tối đa 100K khi thanh toán qua Ví
              Momo
            </p>
          </div>
        </div>
        <div className="row row-cols-1">
          <div className="col col-lg-9 d-block mx-auto">
            <button type="button" className="btn btn-lg btn-outline-primary" style={{width: '25rem'}}>
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
          <strong className="text-primary">OPPO </strong> đã trình làng mẫu
          <strong className="text-primary"> Reno7 Z 5G</strong>với thiết kế
          OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên
          nghiệp cùng viền sáng kép, máy có một cấu hình mạnh mẽ và đạt
          chứng nhận xếp hạng A về độ mượt.
        </p>
        <p>
          <strong className="fw-bold text-secondary h3">Dễ dàng nổi bật giữa đám đông</strong>
        </p>
        <p>
          Điện thoại OPPO Reno7 Z 5G có khung viền vát phẳng, vuông vức
          trendy làm cho máy toát lên nét hiện đại và năng động. Bốn góc
          được bo cong mềm mại tạo cảm giác thoải mái và nhẹ nhàng (chỉ
          173 g). Với thiết kế nguyên khối làm tổng thể máy trở nên cực kỳ
          chắc chắn, không chỉ đẹp mà còn tăng độ bền.
        </p>
        <p>
          <img src=
          {`${process.env.PUBLIC_URL}img/img-oppo/hinhb2.jpg`}     className="img-fluid"
          alt="..."                 />

  
        </p>
      </div>
      <div className="col col-lg-4">
        <h3>Mô Tả Sản Phẩm</h3>
        <table className="table table-striped table-hover mt-3">
          <tbody>
            <tr>
              <td>Màn hình:</td>
              <td colSpan={3}>AMOLED6.43"Full HD+</td>
            </tr>
            <tr>
              <td>Hệ điều hành:</td>
              <td>Android 11</td>
            </tr>
            <tr>
              <td>Camera sau:</td>
              <td colSpan={3}>Chính 64 MP &amp; Phụ 2 MP, 2 MP</td>
            </tr>
            <tr>
              <td>Camera trước:</td>
              <td colSpan={3}>16 MP</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td colSpan={3}>Snapdragon 695 5G</td>
            </tr>
            <tr>
              <td>RAW:</td>
              <td colSpan={3}>8G</td>
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
              <td colSpan={3}>4500 mAh33 W</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

</>

     );
}
 
export default Chitietoppo2;