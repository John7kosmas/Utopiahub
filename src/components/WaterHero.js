import { useEffect } from "react";
import WaterWave from "react-water-wave";
import { Swiper, SwiperSlide } from "swiper/react";
import { Hero4Slider } from "../sliderProps";
import { dataBgImg } from "../utilits";
const WaterHero = () => {
  useEffect(() => {
    dataBgImg();
  }, []);

  return (
    <section id="hero">
      <WaterWave id="ripple" imageUrl="/img/bg4.jpg">
        {(methods) => (
          <div className="fn_cs_hero_slider">
            <div className="bg_overlay" />
            <div className="left_part">
              <h3 className="fn__maintitle big" data-text="JK GAMING HUB">
                JK GAMING HUB
              </h3>
              <p>
              Your NO.1 SPOT FOR ONLINE GAMING!
              </p>
              <a
                href="/blog-single"
                className="metaportal_fn_button"
                target="_blank"
                rel="noreferrer"
              >
                <span>General Website Info!</span>
              </a>
            </div>
            <div className="slider_part">
              <Swiper {...Hero4Slider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/1.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/2.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/3.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                        <a
                          className=""
                          href=""
                        >
                          <img src="/svg/play.svg" alt="" className="fn__svg" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/4.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/5.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/6.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/7.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/8.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/9.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img_holder">
                        <div
                          className="abs_img"
                          data-bg-img="/img/drops/10.jpg"
                          style={{}}
                        />
                        <img src="/img/1x1.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        )}
      </WaterWave>
    </section>
  );
};
export default WaterHero;
