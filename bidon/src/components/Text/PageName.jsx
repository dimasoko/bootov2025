import React from 'react';
import styles from './PageName.module.css';

const PageName = ({ text }) => {
  return (
    // Оборачиваем в pageWrapper для центрирования на экране
    <div className={styles.pageWrapper}>
      <div className={styles.textContainer}>
        <div className={styles.svglayer}>
          <img src="/PageNameBG.svg" alt="Фон" />
        </div>
        <div className={styles.textcontent}>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default PageName;