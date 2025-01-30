import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Blog = () => {
  return (
    <Layout pageTitle={"Blog"}>
      <PageBanner pageName={"Dev updates-Notes"} />

      <div className="metaportal_fn_bloglist">
        <div className="container small">
          <div className="bloglist">
            <ul className="fn-isotope">
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>01</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>Author: JohnksmDev --- Date 02-01-2025</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="">
                        <a> 
                        <div>🏷️JavaScript has made its appearance on my website by giving the taste of fresh as regards website designing side!</div>
                       <div>🏷️The entire website has been re-designed! </div>
                       🏷️A new private library has been added which a requires a secret code so as to be seen!
                       <div>🏷️New button design has been added which reacts whenever you CLICK on it! (New reactive button)</div>
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single">
                      <a>
                        <img src="" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>02</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>Author: JohnksmDev --- Date x-x-xx</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="">
                        <a>ADD SOMETHING HERE!</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single">
                      <a>
                        <img src="" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>03</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>Author: JohnksmDev --- Date x-x-xx</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="">
                        <a>
                        ADD SOMETHING HERE!
                        </a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single">
                      <a>
                        <img src="" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>04</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>Author: JohnksmDev --- Date x-x-xx</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link href="">
                        <a>ADD SOMETHING HERE!</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link href="/blog-single">
                      <a>
                        <img src="" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link href="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_pagination">
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">77</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
