import React, { useState } from "react";
import styles from "./ServiceForm.module.css";

const ServiceForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [image, setImage] = useState(initialData.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, price, image });
  };

  return (
    <div className={styles.modalOverlay}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>
          {initialData.title ? "Редактировать услугу" : "Добавить услугу"}
        </h2>
        <label className={styles.label}>Название
          <input className={styles.input}
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                 required />
        </label>
        <label className={styles.label}>Описание
          <textarea className={styles.textarea}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required />
        </label>
        <label className={styles.label}>Цена
          <input className={styles.input}
                 type="number"
                 value={price}
                 onChange={e => setPrice(e.target.value)}
                 required />
        </label>
        <label className={styles.label}>Картинка (путь)
          <input className={styles.input}
                 value={image}
                 onChange={e => setImage(e.target.value)}
                 required
                 placeholder="/images/service4.png" />
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

export default ServiceForm;
