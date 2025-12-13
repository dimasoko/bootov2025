import React from 'react';
import styles from '../Fields/SelectField.module.css'

export default function SelectField({
  name,
  label,
  options,
  register,
  validation,
  error,
}) {
  return (
    <div className={styles.field}>
      <select
        {...register(name, validation)}
        className={styles.fieldInput}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className={styles.fieldLabel}>{label}</label>
      {error && <span className={styles.fieldError}>{error.message}</span>}
    </div>
  );
}