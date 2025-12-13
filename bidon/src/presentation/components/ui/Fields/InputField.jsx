import React from 'react';

export default function InputField({
  name,
  label,
  type = 'text',
  register,
  validation,
  error,
  ...props
}) {
  return (
    <div className="booking__field">
      <input
        {...register(name, validation)}
        type={type}
        className="booking__input"
        {...props}
      />
      <label className="booking__label">{label}</label>
      {error && <span className="booking__error">{error.message}</span>}
    </div>
  );
}