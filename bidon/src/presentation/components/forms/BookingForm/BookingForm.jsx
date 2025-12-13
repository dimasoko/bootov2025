import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useBooking } from '../../../../application/contexts/BookingContext';
import { getServices } from '../../../../infrastructure/api/services';
import InputField from '../../ui/Fields/InputField';
import SelectField from '../../ui/Fields/SelectField';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  const { createBooking, loading } = useBooking();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const today = new Date().toISOString().split('T')[0];

  // Загружаем услуги с сервера
  const { data: services = [], isLoading: servicesLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await getServices();
      return response.data;
    },
  });

  const onSubmit = async (data) => {
    const result = await createBooking(data);
    if (result.success) {
      alert('Запись создана успешно!');
    } else {
      alert(result.message || 'Ошибка создания записи');
    }
  };

  if (servicesLoading) {
    return <div className={styles.loading}>Загрузка услуг...</div>;
  }

  // Формируем опции для SelectField из загруженных услуг
  const serviceOptions = services.map((service) => ({
    value: service.title,
    label: `${service.title} - ${service.price} ₽`
  }));

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingBox}>
        <h2 className={styles.bookingTitle}>Для записи на занятие выберите:</h2>
        <form className={styles.bookingForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>вид посещения</label>
            <SelectField
              name="visitType"
              register={register}
              options={serviceOptions}
              validation={{ required: ' обязательное поле' }}
              error={errors.visitType}
              className={styles.fieldInput}
              selectClassName={styles.fieldSelect}
            />
            {errors.visitType && (
              <span className={styles.errorMessage}>{errors.visitType.message}</span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Дата</label>
            <InputField
              name="date"
              type="date"
              register={register}
              validation={{ 
                required: ' обязательное поле',
                min: {
                  value: today,
                  message: 'Дата не может быть раньше сегодняшней'
                }
              }}
              error={errors.date}
              className={styles.fieldInput}
              min={today}
            />
            {errors.date && (
              <span className={styles.errorMessage}>{errors.date.message}</span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>время</label>
            <InputField
              name="time"
              type="time"
              register={register}
              validation={{ required: ' обязательное поле' }}
              error={errors.time}
              className={styles.fieldInput}
            />
            {errors.time && (
              <span className={styles.errorMessage}>{errors.time.message}</span>
            )}
          </div>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? 'секунду...' : 'записаться'}
          </button>
        </form>
      </div>
    </div>
  );
}
