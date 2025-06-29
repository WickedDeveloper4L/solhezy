import { Helmet } from "react-helmet";
import PageContact from "../../components/page-contact/pageContact";
import styles from "./about.module.scss";
import BULB from "../../assets/light-bulb-svgrepo-com.svg";
const About = () => {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>About us • Edwako</title>
        <meta name="description" content="Get to know us" />
      </Helmet>
      <div className={styles.left}>
        <span className={styles.title}>Our values</span>
        <span className={styles.catchline}>The Power of People</span>
        <span className={styles.desc}>
          At Edwako, we put people first! We guarantee the best results because
          the best teams produce the most success. We enjoy our work, we strive
          for excellence in all we do, and we cultivate relationships where
          transparency and mutual respect are of the utmost importance. All of
          this has been boiled down into three values that reflect our culture
          of happiness.
        </span>
        <div className={styles.services}>
          <div className={styles.tile}>
            <img src={BULB} alt="Edwako" className={styles.svg} />
            <span className={styles.title}>Admire People</span>
            <span className={styles.text}>
              Humility and respect are two crucial elements for every personal
              and professional achievement
            </span>
          </div>
          <div className={styles.tile}>
            <img src={BULB} alt="Edwako" className={styles.svg} />
            <span className={styles.title}>Always Find a Better Way</span>
            <span className={styles.text}>
              We always want to go the extra mile. Here at Edwako, we have a
              mentality of “always learning” and “always testing”
            </span>
          </div>
          <div className={styles.tile}>
            <img src={BULB} alt="Edwako" className={styles.svg} />
            <span className={styles.title}>Customer Experience Freaks</span>
            <span className={styles.text}>
              We don’t limit ourselves to just meet the expectations of our
              clients, we go above and beyond
            </span>
          </div>
        </div>
      </div>
      <PageContact title="Want to learn more about us?" />
    </div>
  );
};

export default About;
