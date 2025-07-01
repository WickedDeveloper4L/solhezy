import styles from "./emailmarketing.module.scss";
import ListItem from "../../components/list item/ListItem";
import PageContact from "../../components/page-contact/pageContact";
import { Helmet } from "react-helmet";
import COVER from "../../assets/emailmarketing.jpg";
const Emailmarketing = () => {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>Email Marketing • Edwako</title>
        <meta
          name="description"
          content="let's get started on email marketing"
        />
      </Helmet>
      <div className={styles.left}>
        <span className={styles.title}>Email Marketing</span>{" "}
        <img src={COVER} alt="logo" className={styles.cover} />
        <span className={styles.catchline}>
          The best channel for driving direct response
        </span>
        <span className={styles.desc}>
          According to a study by ADigital, 80% of users check their email
          several times a day. Believe it or not, email marketing is a channel
          with one of the highest ROIs.
        </span>
        <span className={styles.subheading}>
          Why Do You Need to Include Email Marketing in Your Strategy?
        </span>
        <div className={styles.list}>
          <div className={styles.items}>
            <div>
              <ListItem
                heading={"It is highly effective"}
                number={1}
                content={
                  "Users often interact a lot with emails before converting, which translates into acquiring customers with definitive interest in your brand."
                }
              />
            </div>

            <div>
              <ListItem
                heading={"Allows for a high level of segmentation"}
                number={2}
                content={
                  "You can create email lists with a high level of segmentation. Combining this with big data and marketing automation, you can easily launch highly-personalzied and dynamic email campaings."
                }
              />
            </div>

            <div>
              <ListItem
                heading={"It is the perfect format for testing"}
                number={3}
                content={
                  "You can A/B test multiple variables (subject lines, CTAs, copy, etc.) that allow you to find the most effective combinations for boosting your conversion rates."
                }
              />
            </div>

            <div>
              <ListItem
                heading={"It's a flexible and creative format"}
                number={4}
                content={
                  "Email allows you to experiment with different elements, including video, imagery, and so on. It also responds very well to mobile devices. "
                }
              />
            </div>

            <div>
              <ListItem
                heading={
                  "It can be adapted to users in every stage of the marketing funnel"
                }
                number={5}
                content={
                  "You can accomplish different objectives with tailored strategies, including: boosting engagement rates, lead nurturing, and increasing conversion rates."
                }
              />
            </div>
          </div>
        </div>
        <span className={styles.subheading}>How Edwako Can Help You</span>
        <span className={styles.desc}>
          Edwako works with you from the beginning to understand your goals,
          advise you on the best strategy, and provide you with access to
          premium databases.
        </span>
        <span className={styles.desc}>We provide the following services:</span>
        <div className={styles.list}>
          <div className={styles.items}>
            <div>
              <ListItem
                heading={"Initial consultation"}
                number={1}
                content={
                  "We help you define your marketing objectives and advise you on how much of your budget to allocate to an email marketing strategy. "
                }
              />
            </div>

            <div>
              <ListItem
                heading={"Campaign design"}
                number={2}
                content={
                  "We provide design and technical support for email creative and landing pages. We work to continuously optimize the campaigns according to their response rates."
                }
              />
            </div>

            <div>
              <ListItem
                heading={"Diffusion"}
                number={3}
                content={
                  "We collaborate with a wide network of global premium databases. We test how different databases perform by sending small volumes of emails at first to identify the ones that provide the best quality in relation to cost per lead and cost per acquisition."
                }
              />
            </div>

            <div>
              <ListItem
                heading={"Campaign analysis"}
                number={4}
                content={
                  " We operate in full transparency and will always break down the metrics for you."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <PageContact title="Let's create an effective email marketing strategy together." />
    </div>
  );
};

export default Emailmarketing;
