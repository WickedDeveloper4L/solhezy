/* eslint-disable react/prop-types */
import styles from "./pagecontact.module.scss";

const PageContact = ({ title }) => {
  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.text_main}>{title}</h1>

        <a
          className={styles.btn}
          href="https://airtable.com/appSaNlCf3MbTcDKW/pagGj2WMmqeyXg2UQ/form
"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default PageContact;
