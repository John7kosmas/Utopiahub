import Link from "next/link";
import Layout from "../src/layout/Layout";
const BlogSingle = () => {
  return (
    <Layout pageTitle={"Website Info"}>
      <div className="metaportal_fn_blog_single">
        <div className="container small">
          <div className="metaportal_fn_share">
            <h5 className="label">Share:</h5>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/twitter-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/facebook-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/instagram-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/pinterest-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/behance-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_breadcrumbs">
            <p>
              <Link href="/">
                <a>Home</a>
              </Link>
              <span className="separator">/</span>
              <Link href="/blog">
                <a>INFO</a>
              </Link>
              <span className="separator">/</span>
              <span className="current">
              </span>
            </p>
          </div>
          <div className="single_img">
            <img src="/img/blog/single.jpg" alt="" />
          </div>
          <div className="metaportal_fn_minis">
            <div className="m_item">
              <a href="#">January 02, 2025</a>
            </div>
            <div className="m_item">
              <span>
                By <a href="#">Admin: JohnKsm</a>
              </span>
            </div>
            <div className="m_item">
              <a href="#comments">5 Comments from admin group!</a>
            </div>
          </div>
          {/* Sidebar */}
          <div className="metaportal_fn_wsidebar">
            {/* Left Sidebar */}
            <div className="sidebar_left">
              {/* Single Title */}
              <div className="single_title">
                <h3
                  className="fn__maintitle"
                  data-text="Website General Info"
                  data-align="left"
                >
                  Website General Info
                </h3>
                <div className="categories">
                  <a href="#">Gaming</a>, <a href="#">Simplicity</a>,{" "}
                  <a href="#">Fascinating.</a>
                </div>
              </div>
              {/* !Single Title */}
              {/* Single Description */}
              <div className="single_desc">
                <p>
                📎CONNECTIVITY...👨‍💻
                You can access my website 24/7 without any connection""" problem!
                </p>
                <p>
                📎SSL PROTECTION!🛡️
                My website contains SSL""" (Secure Sockets Layer) so as to ensure that your connection with our server is completely safe!
                </p>
                <p>
                📎GAME GENRE.🎮
                My website includes both singleplayer and 2-player games since we want to give the opportunity to play either alone or with your friend""" (LOCAL MULTPLAYER)!
                </p>
                <p>
                📎REPORT A BUG!🐛
                You can report a bug by just sending me a personal email with a detailed description of the bug/problem you have faced to the according adreess: JKGAMINGHUB@OUTLOOK.COM!
                </p>
                <p>
                📎NEASY NAVIGATION!🧭
                  You can easily navigate to my website as I have added some buttons with which you can be redirected to your preferable tab!(HOME, ABOUT US!, GAMES)
                </p>
              </div>
              {/* !Single Description */}
              {/* Author Information Box */}
              <div className="metaportal_fn_author_info">
                <div className="info_img">
                  <img src="/img/dev.jpg" alt="" />
                </div>
                <div className="info_desc">
                  <h3 className="fn_title">JohnKsmDev</h3>
                  <p className="fn_desc">
                  ✪ Owner of JKHQ!
                  ✪ Developer⚙️
                  </p>
                  <ul className="author_social">
                    <li>
                      <a href="">
                        <img
                          src=""
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src=""
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/johnksm_/">
                        <img
                          src="/svg/social/instagram-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@John7kosmas">
                        <img
                          src="/svg/social/youtube-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/john-kosmas-342b362b0/">
                        <img
                          src="/svg/social/linkedin-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* !Author Information Box */}
              {/* Tags */}
              {/* !Tags */}
            </div>
            {/* !Left Sidebar */}
            {/* Right Sidebar */}
            <div className="sidebar_right">
              {/* Widget (Top Articles) */}
              <div className="widget widget-articles">
                <div className="wid-title">
                  <span className="text">Top Articles</span>
                  <span className="icon" />
                </div>
                <div className="metaportal_fn_widget_articles">
                  <ul>
                    <li>
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Use online website to enjoy yourself by playing some free online games!
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">December 31, 2024</span>
                          <span className="comment_count">5 Comments</span>
                        </p>
                        <span className="count">1</span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Enjoy your free online games with your friends so as to have a more pleasure time!
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">December 31, 2024</span>
                          <span className="comment_count">3 Comments</span>
                        </p>
                        <span className="count">2</span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Use VPN so as to protect your privacy while playing online/multiplayer games!
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">December 31, 2024</span>
                          <span className="comment_count">2 Comments</span>
                        </p>
                        <span className="count">3</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* !Widget (Top Articles) */}
              {/* Widget (Custom Categories) */}
              
              {/* !Widget (Custom Categories) */}
              {/* Widget (social) */}
            </div>
            {/* !Right Sidebar */}
          </div>
          {/* !Sidebar */}
        </div>
        {/* Previous & Next Box */}
  
        {/* !Previous & Next Box */}
                {/* !Previous & Next Box */}
                {/* Comments */}
  
                {/* !Comments */}
              </div>
            </Layout>
          );
        };
        export default BlogSingle;
        