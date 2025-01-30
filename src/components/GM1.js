import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="GAMING LIBRARY 1"
          data-align="center"
        >
          GAMING LIBRARY 1
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
                    <span className="phase">Game 01</span>
                    <div className="item_in">
                      <p className="date">ID:0001</p>
                      <h3 className="title">BASKETBROS</h3>
                      <p className="desc">
                      Basketbros is a fancy basketball game ehich gives you the opportunity to compete against an AI or with your friend with the use of easily  <span class="text-primary">TYPE: SINGLEPLAYER/2-PLAYER GAME</span>
                      <font color="yellow">DEVELOPER: Blue Wizard Digital.</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/basketbros/index.html" target=""rel="noreferrer"> PLAY </a></button>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 02</span>
                    <div className="item_in">
                      <p className="date">ID:0002</p>
                      <h3 className="title">Chromedino</h3>
                      <p className="desc">
                      GOOGLE CHROME OFFLINE GAME! <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                      <font color="yellow">DEVELOPER: GOOGLE</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/chromedino/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 03</span>
                    <div className="item_in">
                      <p className="date">ID 0003</p>
                      <h3 className="title">CORE BALL</h3>
                      <p className="desc">
                      Coreball is a game where you have to throw balls into a spinning core ball without hitting any obstacles.  <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                      <font color="yellow">DEVELOPER: Geni Quartaroli</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/core-ball/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 04</span>
                    <div className="item_in">
                      <p className="date">ID 0004</p>
                      <h3 className="title">CROSSY ROAD</h3>
                      <p className="desc">
                      he objective of Crossy Road is to move a character through an endless path of static and moving obstacles as far as possible without dying. <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                      <font color="yellow">DEVELOPER: Hipster Whale/yodo1</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/crossyroad/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 05</span>
                    <div className="item_in">
                      <p className="date">ID 0005</p>
                      <h3 className="title">FNAF 1</h3>
                      <p className="desc">
                      Five Nights at Freddy's (FNaF) is a 2014 point-and-click survival horror game developed and published by Scott Cawthon. The player takes on the role of Mike Schmidt, a night security guard at a family pizzeria. Schmidt must complete his shifts while avoiding the homicidal animatronic characters that wander the restaurant at night.  <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                  <font color="red">ATTENTION: HORROR GAME!</font>
                  <font color="yellow">DEVELOPER: ScottGames/Steel Wool Studios/Illumix/Mega Cat Studios/Clickteam</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/fnaf/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 06</span>
                    <div className="item_in">
                      <p className="date">ID 0006</p>
                      <h3 className="title">FNAF 2</h3>
                      <p className="desc">
                      In Five Nights at Freddy's 2, the old and aging animatronics are joined by a new cast of characters. They are kid-friendly, updated with the latest in facial recognition technology, tied into local criminal databases, and promise to put on a safe and entertaining show for kids and grown-ups alike! <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                  <font color="red">ATTENTION: HORROR GAME!</font>
                  <font color="yellow">DEVELOPER: ScottGames/Steel Wool Studios/Illumix/Mega Cat Studios/Clickteam</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/fnaf2/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 07</span>
                    <div className="item_in">
                      <p className="date">ID 0007</p>
                      <h3 className="title">FNAF 3</h3>
                      <p className="desc">
                      Five Nights at Freddy's comes back with a third part that tries to keep the whole thing fresh and new. Chasing by just one animatronic, the rest of gang will appear in visions and try to kill us from a heart attack in a chain of scary moments. <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                        <font color="red">ATTENTION: HORROR GAME!</font>
                        <font color="yellow">DEVELOPER: ScottGames/Steel Wool Studios/Illumix/Mega Cat Studios/Clickteam</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/fnaf3/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 08</span>
                    <div className="item_in">
                      <p className="date">ID 0008</p>
                      <h3 className="title">FNAF 4</h3>
                      <p className="desc">
                      Five Nights at Freddy's 4 In this last chapter of the Five Nights at Freddy's original story, you must once again defend yourself against Freddy Fazbear, Chica, Bonnie, Foxy, and even worse things that lurk in the shadows. <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                      <font color="red">ATTENTION: HORROR GAME!</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/fnaf4/index.html" target=""rel="noreferrer"> PLAY </a></button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">GAME 09</span>
                    <div className="item_in">
                      <p className="date">ID 0009</p>
                      <h3 className="title">MONKEY MART</h3>
                      <p className="desc">
                      Monkey Mart is an idle/management game where you control a cute monkey character who is in charge of a supermarket. Plant fruits, harvest produce, move around from station to station to fill the stands with various food items. Sell bananas, corn, eggs, peanuts, coffee beans, chocolate, wheat etc. <span class="text-primary">TYPE: SINGLEPLAYER GAME</span>
                      <font color="yellow">DEVELOPER: HTML CREATURE</font>
                      </p>
                      <button class=""> <a href="https://john7kosmas.github.io/games/monkeymart/index.html" target=""rel="noreferrer"> PLAY </a></button>
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
