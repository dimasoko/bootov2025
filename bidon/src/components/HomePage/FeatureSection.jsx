import React from 'react';
import styles from './FeatureSections.module.css';

const FeatureSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h3>МЫ КРУТЫЕ ПОТОМУ ЧТО</h3>
          <p>
            мы создаем воду из воздуха путем заговаривания доисторических плит, на которых поставлены маленькие китайские чайники. эту технологию придумал БИДОНКЛАБ и помогает избежать подорожания входных билетов
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img src="/mainpic1.jpg" alt="Бассейн" />
        </div>
      </section>
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.imageBlock}>
          <img src="mainpic2.webp" alt="Полотенце и напитки" />
        </div>
        <div className={styles.textBlock}>
          <h3>МЫ КРУТЫЕ ЕЩЁ ВОТ ПОЧЕМУ</h3>
          <p>
            в нашем бассейне ежегодно появляется около полутора тысяч золотых рыбок. наши сотрудники используют их в нашем баре чтобы повеселить гостей (по пятницам)
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;