import { Helmet } from "react-helmet";
import ListItem from "../../components/list item/ListItem";
import PageContact from "../../components/page-contact/pageContact";
import styles from "./videomarketing.module.scss";
import COVER from "../../assets/videomarketing.jpg";
const VideoMarketing = () => {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>Video Marketing • Edwako</title>
        <meta
          name="description"
          content="let's get started on Video marketing"
        />
      </Helmet>
      <div className={styles.left}>
        <span className={styles.title}>Video Marketing</span>
        <img src={COVER} alt="logo" className={styles.cover} />
        <span className={styles.subheading}>How Edwako Can Help You</span>
        <span className={styles.catchline}>
          The best channel for driving direct response
        </span>
        <span className={styles.desc}>
          As experts in digital marketing, we know it’s very important to
          incorporate video elements into your overall strategy. It’s what users
          want and it’s one of the best ways to promote engagement and brand
          awareness.
        </span>
        <span className={styles.desc}>
          We can help you create videos that improve both your online presence
          and your results!
        </span>
        <span className={styles.desc}>We’ll take care of:</span>
        <div className={styles.list}>
          <div className={styles.items}>
            <div>
              <ListItem
                heading={"Designing the strategy."}
                number={1}
                content={
                  "We always keep your objectives in mind, your buyer persona, and the available channels (including any paid options). This way, we can design a well thought out and complete diffusion strategy geared towards getting results and improving your ROI."
                }
              />
            </div>
            <div>
              <ListItem
                heading={"The creation of video content."}
                number={2}
                content={
                  "Everything starts with the creation of high quality, professional content. This includes designing the message and copies, the storytelling, the recording, the editing, and the diffusion of content."
                }
              />
            </div>
            <div>
              <ListItem
                heading={"Different possible formats. "}
                number={3}
                content={
                  "Teasers, product videos, promo videos, vlogs, social video ads, etc."
                }
              />
            </div>
            <div>
              <ListItem
                heading={"Increasing web traffic"}
                number={4}
                content={
                  "In order to achieve your business’s objectives, campaigns will focus on getting results and attracting visitors to your website."
                }
              />
            </div>
            <div>
              <ListItem
                heading={"Engagement"}
                number={5}
                content={
                  "See how user interaction increases as create quality video content. You will also be able to see how your campaign costs improve."
                }
              />
            </div>
            <div>
              <ListItem
                heading={"Working towards your goals"}
                number={5}
                content={
                  "Our team is always focused on getting results and to optimizing our clients’ budgets. In order to accomplish this, we constantly analyze metrics in order to improve campaigns in real time. We work to increase web traffic, conversions, sales, signups, lead generation, and more."
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
      <PageContact title="Are you interested in Video Marketing?" />
    </div>
  );
};

export default VideoMarketing;
