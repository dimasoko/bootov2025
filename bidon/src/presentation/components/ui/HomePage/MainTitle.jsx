import React from 'react';
import styles from './MainTitle.module.css';

const MainTitle = () => {
  return (
    <div className={styles.mainTitle}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>бидон клаб это круто</div>
        <div className={styles.text}>бидон клаб это стильно</div>
        <div className={styles.text}>бидон клаб это возмущение</div>
        <div className={styles.text}>бидон клаб это потрясение</div>
        <div className={styles.text}>бидон клаб это сообщение маме</div>
        <div className={styles.text}>бидон клаб это волшебство</div>
        <div className={styles.text}>бидон клаб это незаконно</div>

      </div>
    </div>
  );
};

export default MainTitle;