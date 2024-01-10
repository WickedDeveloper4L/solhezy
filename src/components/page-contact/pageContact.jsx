/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styles from "./pagecontact.module.scss";

const PageContact = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [location, setlocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [marketingBudget, setMarketingBudget] = useState(0);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/Isaiah_akorita@yahoo.co.uk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        address: address,
        email: email,
        companyName: companyName,
        position_in_company: position,
        marketing_budget_per_year: marketingBudget,
        location: location,
        text: text,
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
      <form className={styles.form} id="contactform" onSubmit={handleSubmit}>
        <h1 className={styles.text_main}>{title}</h1>
        <div className={styles.details}>
          <label htmlFor="name" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="company_name" className={styles.label}>
            Company Name
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="company name"
            id="company_name"
            name="company_name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="position_in_company" className={styles.label}>
            Position in Company
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="position in company"
            id="position_in_company"
            name="position_in_company"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="address"
            id="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label htmlFor="marketing_budget" className={styles.label}>
            Marketing Investment budget per year
          </label>
          <input
            type="number"
            className={styles.input}
            placeholder="$"
            id="marketing_budget"
            name="marketing_budget"
            onChange={(e) => setMarketingBudget(e.target.value)}
            required
          />
          <label htmlFor="location" className={styles.label}>
            Current location
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="your current location"
            id="location"
            name="location"
            onChange={(e) => setlocation(e.target.value)}
            required
          />
          <label htmlFor="location" className={styles.label}>
            how can we help you?
          </label>
          <textarea
            className={styles.input}
            placeholder="tell us how we can help you..."
            id="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <input
            name="_formsubmit_id"
            type="text"
            style={{ display: "none" }}
          />
        </div>
        <button className={styles.btn} value="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PageContact;
