import { Helmet } from "react-helmet";
import ListItem from "../../components/list item/ListItem";
import PageContact from "../../components/page-contact/pageContact";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>Contact • Solhezy</title>
        <meta name="description" content="we want to speak with you!" />
      </Helmet>
      <div className={styles.left}>
        <span className={styles.title}>Contact</span>

        <span className={styles.desc}>
          Work with our incredibly talented team! We will analyze your strategy,
          determine your needs and, with a focus on results and budget
          optimization, offer you the best solution. Please don’t hesitate to
          reach out and contact us!
        </span>

        <span className={styles.subheading}>How Solhezy Can Help You</span>
        <span className={styles.desc}>
          Solhezy works with you from the beginning to understand your goals,
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
      <PageContact title="We want to speak with you!" />
    </div>
  );
};

export default Contact;
