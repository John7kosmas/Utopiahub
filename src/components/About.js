import Link from "next/link";
const About = () => {
  return (
    <section id="about">
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/about/1.jpg">
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/about/bg.jpg" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="The Rise of Legends">
              The Rise of Legends
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <a
              href="https://discord.com/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Find us On Discord</span>
            </a>
          </div>
        </div>
      </div>
      {/* !About Shortcode */}
      <div className="container">
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="How to Mint">
              How to Mint
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <Link href="/nft-single">
              <a className="metaportal_fn_button">
                <span>How to Mint</span>
              </a>
            </Link>
          </div>
          <div className="right_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">01</h3>
                      <p>Connect your Wallet</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">02</h3>
                      <p>Select Your Quantity</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">03</h3>
                      <p>Confirm The Transaction</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">04</h3>
                      <p>Receive Your NFT’s</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            <div className="fn_cs_video">
              <img src="/img/video/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/7e90gBu4pas"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
    </section>
  );
};
export default About;

export const About2 = () => (
  <section id="about2">
    <div className="container small">
      <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="Developer⚙️: JohnKsm.">
            Developer⚙️: JohnKsm.
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
            Developer⚙️: JohnKsm is the head developer of JKGAMINGHUB and a member of the JKGAMINGHUB staff team. He has the main responsibility of developing the website and its features. He is also responsible for the overall design and development of the website. He is a new but a skiller developer and he is always learning and improving his skills. He is a very hard worker and he always strives to complete his accomplishment!
            </p>
            <p>
            </p>
          </div>
          <a
            href="https://www.instagram.com/johnksm_/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find me On instagram</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/2.jpg" />
        </div>
      </div>

      <section id="about2">
      <div className="container small">
      <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="Administrator🛡️: xxxxx.">
            Administrator🛡️: xxxxx.
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
            Administrator🛡️: ADD SOMETHING HERE!
            </p>
            <p>
            </p>
          </div>
          <a
            href="ADD SOMETHIG HERE!!!"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find me On xxxxx</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/slider/5.jpg" />
        </div>
      </div>
      </div>
      </section>



      <div className="fn_cs_collection_info">
        <h3 className="fn__gradient_title">2</h3>
        <h3
          className="fn__maintitle upper"
          data-text="Total Staff Members On My Website!"
        >
          Total Staff Members On My Website!
        </h3>
        <p>
          STAFF MEMBERS ARE HERE SO AS TO DEVELOP THE WEBSITE'S CONTENT FOR KEEPING IT FRESH AND NON-BUGGY! ALSO IT IS HERE SO AS TO SOLVE ANY PROBLEM THAT YOU MIGHT FACE (BUGS!) DURING YOUR NAVIGATION ON MY WEBSITE!
        </p>
      </div>
    </div>
    <div className="">
      <div className="" data-bg-img="" />
      <a
        className=""
        href=""
      >
        <img src="/svg/play.svg" alt="" className="fn__svg" />
      </a>
    </div>
    <div className="container">
      {/* Steps Shortcode */}
      <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
        <ul>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">01</h3>
                <p>CONNECT TO THE INTERNET</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">02</h3>
                <p>OPEN YOUR WEB BROWSER</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">03</h3>
                <p>SEARCH JKGAMINGHUB.GITHUB.IO</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">04</h3>
                <p>HAVE A GREAT TIME... </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* !Steps Shortcode */}
      <div className="fn_cs_join">
        <div className="join_in">
          <h3 className="fn__maintitle upper" data-text="SEE OUR LATEST UPDATES!">
            SEE OUR LATEST UPDATES!
          </h3>
          <p>
            WE UPDATE OUR WEBSITE FREQUENTLY SO AS KEEP OUR CONTENT ALWAYS FRESH WITH KEEPING THE QUALITY TO THE SAME LEVEL AS WE GIVE OUR BEST TO MAKE YOUR NAVIGATION AND PLAY EXPERIECE AS BEST AS POSSIBLE! 
          </p>
          <div className="buttons">
            <a
              href=""
              className=""
              target="_blank"
              rel=""
            >
              <span></span>
            </a>
            <a
              href="/dev-updates-notes"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>See our latest updates/fixes!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
