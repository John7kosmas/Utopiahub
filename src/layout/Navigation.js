import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/gamer.jpg" alt="" />
                  </span>
                  <span className="text">ROLE:GAMER</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a
                    href="https://john7kosmas.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="img/Oldlogo.png" alt="" />
                  </span>
                  <span className="text">My old website!</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("home");
                  }}
                  className={`${subMenu == "home" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Home
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Home
                      </span>
                    </a>
                  </li>


                    <li>
                    <Link href="/index-3">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Back to home</span>
                      </a>
                    </Link>
                  </li> 
                  <li>
                    <Link href="/index-2">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="">
                          
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="">
                          
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4">
                      <a onClick={() => navigationToggle(false)}>
                        <span className=""></span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="">
                          
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="">
                          
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              

              
              <li>
                <Link href="/staff-team">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Staff Team!</span>
                  </a>
                </Link>
              </li>    
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("pages");
                  }}
                  className={`${subMenu == "pages" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Pages
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        GAME LIBRARIES
                      </span>
                    </a>
                  </li>

                  <li>
                    <Link href="/Gaming_library_1">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">GAME LIBRARY 1</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Gaming_library_2">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">GAME LIBRARY 2</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Gaming_library_3">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">GAME LIBRARY 3</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Gaming_library_4">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">GAME LIBRARY 4</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Gaming_library_5">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">GAME LIBRARY 5</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a onClick={() => navigationToggle(false)}>
                        <span className=""></span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/protected">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          SECRET LIBRARY!(dev code is required)
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/dev-updates-notes">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Dev Updates/notes</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog-single">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">INFO</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2025 - Designed &amp; Developed by{" "}
                <a
                  href="https://www.instagram.com/johnksm_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JohnKsm
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
