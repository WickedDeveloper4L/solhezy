/* eslint-disable react/prop-types */
import styles from "./listitem.module.scss";

const ListItem = ({ heading, content, number }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.heading}>
        <div className={styles.number}>
          <h1>{number}</h1>
        </div>
        <h1>{heading}</h1>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
