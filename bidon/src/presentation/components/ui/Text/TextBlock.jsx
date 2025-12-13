import React from 'react';
import styles from './TextBlock.module.css';

const TextBlock = ({ paragraphs }) => { // [[6]] Принимает массив абзацев
  return (
    <div className={styles.container}>
      {paragraphs.map((text, index) => ( // [[5]] Обработка массива через map()
        <p key={index} className={styles.text}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextBlock;