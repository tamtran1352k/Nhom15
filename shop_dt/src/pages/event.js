import React from "react";
import Footer from "./footer";
const Event = () => {
    return (        
            <div>
  <section className="mt-3 text-center">
    <div className="container ">
      <div className="row">
        <div className="col">
          <h5>Cập nhật sự kiện công nghệ nổi bật
            trong nước và Quốc tế</h5>
        </div>
      </div>
    </div>
  </section>
  <section className="mt-3">
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col col-lg ">
          <div className="card mb-3 h-100">
            <img src={`${process.env.PUBLIC_URL}/img/img-sukien/637831253900918625_galaxy-a-event-invitation_1080x1080-1024x1024.webp`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title h3">Sự kiện ra mắt Galaxy A 2022</h5>
              <p className="card-text">ĐÃ KẾT THÚC</p>
              <p className="card-text"><small className="text-muted">17/03/2022 21:00 CH  -  17/03/2022 22:00 CH Livestream</small></p>
            </div>
          </div>
        </div>
        <div className="col col-lg">
          <div className="card mb-3 h-100">
            <img src={`${process.env.PUBLIC_URL}img/img-sukien/637849385840018640_wwdc22.webp`}  className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title h3">Sự kiện WWDC22</h5>
              <p className="card-text">ĐÃ KẾT THÚC</p>
              <p className="card-text"><small className="text-muted">07/06/2022 00:00 SA  -  07/06/2022 01:30 SA Livestream online</small></p>
            </div>
          </div>
        </div>
        <div className="col col-lg mt-3 mb-3">
          <div className="card mb-3 h-100">
            <img src={`${process.env.PUBLIC_URL}/img/img-sukien/637940185848034379_galaxy-unpacked.webp`}  className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title h3">Galaxy Unpacked - Ra mắt Galaxy Z Flip4 - Z Fold4</h5>
              <p className="card-text">ĐÃ KẾT THÚC</p>
              <p className="card-text"><small className="text-muted">10/08/2022 20:00 CH  -  10/08/2022 23:59 CH Online</small></p>
            </div>
          </div>
        </div>
        <div className="col col-lg mt-3 mb-3">
          <div className="card mb-3 h-100">
            <img src={`${process.env.PUBLIC_URL}/img/img-sukien/638090519758042558_su-kien-galaxy-2.webp`}  className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title h3">Sự kiện Galaxy Unpacked 2023</h5>
              <p className="card-text">ĐÃ KẾT THÚC</p>
              <p className="card-text"><small className="text-muted">02/02/2023 01:00 SA  -  02/02/2023 02:00 SA San Francisco</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

       
     );
}
 
export default Event;
