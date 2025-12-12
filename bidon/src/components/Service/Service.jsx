import React from 'react';
import styles from './Service.module.css';

const Service = ({ id, image, title, description, price, isAdmin, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <img src={`http://localhost:5000${image}`} alt="Услуга" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.price}>{price}</div>
      
      {isAdmin ? (
        <div className={styles.adminButtons}>
          <button onClick={() => onEdit(id)} className={styles.editBtn}>
            Изменить
          </button>
          <button onClick={() => onDelete(id)} className={styles.deleteBtn}>
            Удалить
          </button>
        </div>
      ) : (
        <div className={styles.want}>
          <a href='/booking' className={styles.button}>хочется</a>
        </div>
      )}
    </div>
  );
};

export default Service;
