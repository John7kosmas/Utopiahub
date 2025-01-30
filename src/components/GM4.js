import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="GAMING LIBRARY 4"
          data-align="center"
        >
          GAMING LIBRARY 4
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                       ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID XXXX</p>
                      <h3 className="title">UNDEFINED</h3>
                      <p className="desc">
                        ADD SOMETHING HERE!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;
