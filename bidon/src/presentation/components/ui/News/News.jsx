
import styles from './News.module.css';

const News = ({ id, image, title, description, date, isAdmin, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <img src={`http://localhost:5000${image}`} alt="Новость" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>{date}</span>
        {isAdmin && (
          <div className={styles.adminButtons}>
            <button onClick={() => onEdit(id)} className={styles.editBtn}>Изменить</button>
            <button onClick={() => onDelete(id)} className={styles.deleteBtn}>Удалить</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
