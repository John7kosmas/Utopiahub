const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact me!"
          data-align="center"
        >
          Contact me!
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.
                </p>
                <p>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Name</h4>
                <h3>
                  <a>John Kosmas</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a>
                    Jhnkosmas@gmail.com
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Language Known</h4>
                <h3>Greek,English</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Contact;
