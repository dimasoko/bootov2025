import React, { useState } from "react";
import styles from "./NewsForm.module.css";

const NewsForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [image, setImage] = useState(initialData.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, image });
  };

  return (
    <div className={styles.modalOverlay}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>
          {initialData.title ? "Редактировать новость" : "Добавить новость"}
        </h2>
        <label className={styles.label}>Заголовок
          <input className={styles.input}
            value={title}
            onChange={e => setTitle(e.target.value)}
            required />
        </label>
        <label className={styles.label}>Текст
          <textarea className={styles.textarea}
            value={description}
            onChange={e => setDescription(e.target.value)}
            required />
        </label>
        <label className={styles.label}>Картинка (путь)
          <input className={styles.input}
            value={image}
            onChange={e => setImage(e.target.value)}
            required
            placeholder="/images/news1.png" />
        </label>
        <div className={styles.buttonRow}>
          <button type="submit" className={styles.saveBtn}>
            {initialData.title ? "Сохранить" : "Добавить"}
          </button>
          <button type="button" onClick={onCancel} className={styles.cancelBtn}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
