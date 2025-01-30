import Layout from "../src/layout/Layout";

const Protected = () => {
  return (
    <Layout pageTitle={"Protected"}>
      <div className="metaportal_fn_protected">
        <div className="container">
          <div className="message_holder">
            <span className="icon">
              <img src="/svg/lock.svg" alt="" className="fn__svg" />
            </span>
 
            <h3
              className="fn__maintitle"
              data-text=""
              data-align="center"
            >
              Secret Gaming Library
            </h3>
            <p>Please, enter the password to have access to this page.</p>
            <div className="container-custom">
              <form>
                <input name="post_password" type="password" id="password"  />
                <span className="submit" >
                  <input
                    type="submit"
                    name="Submit"
                    className="button"
                    value="Authenticate"
                  />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Protected

