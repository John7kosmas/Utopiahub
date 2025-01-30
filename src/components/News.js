import Link from "next/link";
const News = () => {
  return (
    <section id="news">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Latest Articles"
          data-align="center"
        >
          Latest Articles
        </h3>
        {/* News Shotcode */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Author: JohnKsm ---- Date: x-xx-xxxx</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="">
                      <a>Soon...</a>
                    </Link>
                  </h3>
                </div>
                <div className="">
                  <Link href="">
                    <a>
                      <img src="" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="">
                  <Link href="">
                    <a>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Author: JohnKsm ---- Date: x-xx-xxxx</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="">
                      <a>Soon...</a>
                    </Link>
                  </h3>
                </div>
                <div className="">
                  <Link href="">
                    <a>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Author: JohnKsm ---- Date: x-xx-xxxx</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="">
                      <a>Soon...</a>
                    </Link>
                  </h3>
                </div>
                <div className="">
                  <Link href="">
                    <a>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Author: JohnKsm ---- Date: x-xx-xxxx
                  </p>
                </div>
                <div className="meta">
                  <Link href="">
                    <h2>Soon...</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <Link href="/blog">
                <a className="metaportal_fn_button full">
                  <span>Read Dev updates/Notes</span>
                </a>
              </Link>
            </div>
            <div className="right_bot">
              <p>
                We can advertise you own suggestions about any website update by reaching out my email!
              </p>
            </div>
          </div>
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default News;
