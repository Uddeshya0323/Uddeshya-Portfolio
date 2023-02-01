import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import leaveManagementSystem from "../../img/leaveMangementSystem.jpg"
import cms from "../../img/cms.jpg"
import navbar from "../../img/navbar.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={leaveManagementSystem} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cms} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={navbar} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
