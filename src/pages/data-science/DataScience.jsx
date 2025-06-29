import { Helmet } from "react-helmet";
import ListItem from "../../components/list item/ListItem";
import styles from "./datascience.module.scss";
import PageContact from "../../components/page-contact/pageContact";
const DataScience = () => {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>Data Science • Edwako</title>
        <meta name="description" content="let's get started on data." />
      </Helmet>
      <div className={styles.left}>
        <span className={styles.title}>Data Science</span>
        <span className={styles.catchline}>The Power of Data</span>
        <span className={styles.desc}>
          Today, your company generates a large amount of data that, if treated
          in the right way, can bring a lot of value to your marketing and sales
          strategies. Customer retention, the promotion of more personalized
          sales, and the reduction of acquisition costs are some examples of the
          benefits. Thanks to the expertise of our team of Data Scientists and
          Marketing Strategists, we can leverage all this data to generate
          high-level business intelligence.
        </span>

        <span className={styles.subheading}>
          How Edwako Can Use Data To Help You
        </span>
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
      <PageContact title="Let's create an effective data driven strategy together." />
    </div>
  );
};

export default DataScience;
