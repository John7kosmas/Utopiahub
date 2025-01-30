import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="GAMING LIBRARY 3"
          data-align="center"
        >
          GAMING LIBRARY 3
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
                    <span className="phase">GAME 19</span>
                    <div className="item_in">
                      <p className="date">ID 0019</p>
                      <h3 className="title">GOLF</h3>
                      <p className="desc">
                      Golf video game is a digital simulation or arcade-style game that replicates the sport of golf. These games allow players to control a golfer, hitting a virtual ball across a golf course with the goal of getting the ball into the hole in as few strokes as possible. Golf video games can range from realistic, simulation-driven experiences to fun, casual arcade-style games with exaggerated mechanics and fantasy elements. <span class="text-primary">TYPE: SINGLEPLAYER</span>
                      <font color="yellow">DEVELOPER: SuperSonic Studios</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/golf/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 20</span>
                    <div className="item_in">
                      <p className="date">ID 0020</p>
                      <h3 className="title">GOOGLE SNAKE</h3>
                      <p className="desc">
                      Google Snake is a popular browser-based version of the classic Snake game, which is often played as a simple, casual game on the Google homepage or through Google Search. It’s a fun and easy-to-access game where players control a snake that grows longer as it eats food, with the goal of avoiding running into walls or its own body. The game has gained widespread recognition for being a built-in feature on many mobile devices and accessible through Google’s search engine.<span class="text-primary">TYPE: SINGLEPLAYER</span>
                      <font color="yellow">DEVELOPER: Google</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/google-snake/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 21</span>
                    <div className="item_in">
                      <p className="date">ID 0021</p>
                      <h3 className="title">GUN MAYHEM</h3>
                      <p className="desc">
                      Gun Mayhem is a popular indie multiplayer platformer and shooter video game, known for its fast-paced action, fun graphics, and chaotic battles. The game is primarily available in browser-based formats, making it easy to access and play on PC without requiring downloads or installations. Gun Mayhem gained attention for its addictive gameplay, simple mechanics, and enjoyable multiplayer modes. <span class="text-primary">TYPE: SINGLEPLAYER</span>
                      <font color="yellow">DEVELOPER: UNKWNOWN</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/gun-mayhem/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 22</span>
                    <div className="item_in">
                      <p className="date">ID 0022</p>
                      <h3 className="title">RACER</h3>
                      <p className="desc">
                      A racer video game is a genre of video games focused on vehicle racing, where players control a vehicle—whether it's a car, motorcycle, boat, or even futuristic craft—through various tracks or environments in a race to reach the finish line first. These games can feature realistic simulations or more arcade-style experiences with exaggerated physics, power-ups, and fast-paced action. <span class="text-primary">TYPE: SINGLEPLAYER</span>
                      <font color="yellow">DEVELOPER: UNKWNOWN</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/racer/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 23</span>
                    <div className="item_in">
                      <p className="date">ID 0023</p>
                      <h3 className="title">RETRO BOWL</h3>
                      <p className="desc">
                      Retro Bowl is a popular, retro-style sports video game that brings American football to life with a nostalgic, pixelated look and simple yet addictive gameplay. Developed by New Star Games, the game combines elements of traditional football with management and strategy, all while maintaining a fun, easy-to-pick-up arcade feel. <span class="text-primary">TYPE: SINGLEPLAYER</span>
                      <font color="yellow">DEVELOPER: NEW STAR GAMES</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/racer/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 24</span>
                    <div className="item_in">
                      <p className="date">ID 0024</p>
                      <h3 className="title">X-TRIAL RACING</h3>
                      <p className="desc">X-Trial Racing is a motorcycle trial racing game that focuses on precision and skill-based racing. It's part of the trial bike genre, which involves riders navigating through challenging obstacle courses (often referred to as "trials") without touching the ground or crashing. The game combines elements of platforming, physics-based mechanics, and racing, offering players the opportunity to ride through a series of increasingly difficult tracks filled with obstacles, jumps, and hazards. <span class="text-primary">TYPE: SINGLEPLAYER</span>
                      <font color="yellow">DEVELOPER: Deathriders</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/x-trial-racing/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME XX</span>
                    <div className="item_in">
                      <p className="date">ID:XXXX</p>
                      <h3 className="title">UNDEFIND!</h3>
                      <p className="desc">
                        ADD SOMETHING HERE
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
