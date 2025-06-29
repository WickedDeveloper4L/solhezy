import Hero from "../../components/hero/Hero";
import styles from "./home.module.scss";
import EMAIL from "../../assets/email-marketing-advertising-svgrepo-com.svg";
import VIDEO from "../../assets/video-marketing-advertising-svgrepo-com.svg";
import DATA from "../../assets/graph-analytics-business-svgrepo-com.svg";
import ZOHO from "../../assets/zoho.svg";
import SYSTEME from "../../assets/systeme.png";
import GETRESPONSE from "../../assets/getresponse_logotype_cmyk-601x219-315ab69.png";
import MAILCHIMP from "../../assets/mailchimp-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";
const Home = () => {
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/Isaiah_akorita@yahoo.co.uk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={styles.main}>
      <Hero />
      <div className={styles.first}>
        <h1 className={styles.title}>What can we do for you?</h1>
        <span className={styles.text}>
          Online marketing and digital advertising at your service! We follow a
          performance-based strategy, where our objective is to get you better
          results. Simply tell us what you need and we will provide you with the
          solutions.
        </span>
      </div>
      <div className={styles.services}>
        <div className={styles.tile}>
          <img src={EMAIL} alt="email marketing" className={styles.svg} />
          <span className={styles.title}>Email Marketing</span>
          <span className={styles.text}>
            Email marketing is one of the most utilized marketing techniques and
            actually offers the best ROI.
          </span>
          <Link to="/email_marketing" className={styles.link}>
            LEARN MORE
          </Link>
        </div>
        <div className={styles.tile}>
          <img src={DATA} alt="data science" className={styles.svg} />
          <span className={styles.title}>Data Science</span>
          <span className={styles.text}>
            Data science involves using the scientific method to extract
            understanding from data. The results are then used to optimize your
            digital marketing campaigns.
          </span>
          <Link to="data_science" className={styles.link}>
            LEARN MORE
          </Link>
        </div>
        <div className={styles.tile}>
          <img src={VIDEO} alt="video marketing" className={styles.svg} />
          <span className={styles.title}>Video Marketing</span>
          <span className={styles.text}>
            Establish your brand on YouTube! With video marketing, you can
            increase brand awareness and boost engagement.
          </span>
          <Link to="/video_marketing" className={styles.link}>
            LEARN MORE
          </Link>
        </div>
      </div>
      <div className={styles.second}>
        <h1 className={styles.title}>Badged Member of</h1>
        <div className={styles.orgs}>
          <img src={MAILCHIMP} alt="mailchimp" className={styles.org_img} />
          <img src={GETRESPONSE} alt="getresponse" className={styles.org_img} />
          <img src={ZOHO} alt="zoho" className={styles.org_img} />
          <img src={SYSTEME} alt="systeme" className={styles.org_img} />
        </div>
      </div>
      {newsletter && (
        <form onSubmit={handleSubmit} className={styles.newsletter}>
          <span className={styles.text}>Be the first to know.</span>
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button className={styles.btn} value="submit" type="submit">
            Subscribe
          </button>
          <span className={styles.subtext}>
            Recieve news, promotions and products by email from Edwako. You can
            unsubscribe whenever you want.
          </span>
          <ImCross
            onClick={() => setNewsletter(false)}
            className={styles.close}
          />
        </form>
      )}
    </div>
  );
};

export default Home;
