import { Fragment } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
const WalletPopUp = ({ walletToggle, wallet }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet_closer ${wallet ? "active" : ""}`}
        onClick={() => walletToggle(false)}
      />
      <div className={`metaportal_fn_walletbox ${wallet ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => walletToggle(false)}>
          <span />
        </a>
        <div className="walletbox">
          <div className="title_holder">
            <h3>Social media</h3>
            <p>
              Thank you for reaching out my website. You can reach out my social media channels with the help of the buttons below!
            </p>
          </div>
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
              </li>
              <li>
                <div className="item">
                  <a href="/index-3" />
                  <span className="icon">
                    <img src="" alt="" />
                  </span>
                  <span className="text">Return to home!</span>
                </div>
              </li>

              

              
                
              <li>
                <div className="item">
                  <a href="https://www.instagram.com/johnksm_" />
                  <span className="icon">
                    <img src="img/instagram.png" alt="" />
                  </span>
                  <span className="text">Instagram</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="https://www.linkedin.com/in/john-kosmas-342b362b0/" />
                  <span className="icon">
                    <img src="img\linkedin.png" alt="" />
                  </span>
                  <span className="text">LinkedIN</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.site.wallet,
});

export default connect(mapStateToProps, { walletToggle })(WalletPopUp);
