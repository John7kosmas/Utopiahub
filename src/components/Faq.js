import { useState } from "react";

const Faq = () => {
  const faqs1 = [
    {
      title: "What is Online Gaming?",
      dec: "An electronic game playing over a computer network, particularly over the Internet. Electronic game worlds have generated billions of dollars, with millions of players around the world fighting, buying, crafting, and selling in a variety of online environments.",
    },
    {
      title: "WHAT IS THE SSL SECURITY?      ",
      dec: "SSL is an encryption protocol that provides privacy, authentication, and integrity to Internet communications.",
    },
    {
      title: "WHY ONLINE GAMING IS GOOD fOR YOU?",
      dec: "Social Benefits Obviously, one of the main benefits of online gaming is the social aspects. You get the chance to play with existing friends and make new ones while you’re at it...",
    },
    {
      title: "WHAT IS A GAMING HUB?",
      dec: "A simple website which includes various games of different and unique genres such as singleplayer and multiplayer or two-player games(local multiplayer)",
    },
  ];
  const faqs2 = [
    {
      title: "HOW CAN I PLAY THE GAMES WITH THE TWO-PLAYER-TAG",
      dec: "These games can easily be played as all the required buttons are displayed whenever you start the game from the game library or by reaching out the games description ehich may display the required buttons also!",
    }
  ];
  const [active, setActive] = useState(`a0`);
  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 className="fn__maintitle" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section id="faq">
      <div className="container">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <h3 className="fn__maintitle" data-text="FAQ">
              FAQ
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              FAQ stands for Frequently Asked Questions. It is a list of commonly asked questions and answers about a specific topic. An FAQ forum is often used in articles, websites, email lists, and online forums where common questions tend to recur. The purpose of an FAQ is generally to provide information on frequent questions or concerns. An effective FAQ resource can educate, inform, and guide the user in a natural way through your website’s content and toward the goals and end results you have set.
              </p>
              <p>
              </p>
            </div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
