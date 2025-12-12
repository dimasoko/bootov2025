import { useSelector, useDispatch } from 'react-redux';
import { openServiceForm, closeServiceForm } from '../../store/slices/modalsSlice.js';
import styles from './ServiceSect.module.css';
import Service from './ServiceCard.jsx';
import { useServices } from './useServices.jsx';
import { useServiceMutations } from './useServiceMutations.jsx';
import ServiceForm from './ServiceForm.jsx';

const ServiceSect = ({ isAdmin = false }) => {
  const { isOpen: formOpen, editData } = useSelector((state) => state.modals.serviceForm);
  const dispatch = useDispatch();

  const { services, errorServices, isLoadingServices } = useServices();
  const { addMutation, editMutation, deleteMutation } = useServiceMutations();

  const handleEdit = (id) => {
    const service = services.find(s => s.id === id);
    dispatch(openServiceForm(service)); // dispatch
  };

  const handleDelete = (id) => {
    if (window.confirm('Удалить эту услугу?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleAdd = () => {
    dispatch(openServiceForm(null)); // dispatch
  };

  const handleFormSubmit = (data) => {
    if (editData) {
      editMutation.mutate({ id: editData.id, ...data });
    } else {
      addMutation.mutate(data);
    }
    dispatch(closeServiceForm()); // dispatch
  };

  if (isLoadingServices) return <div>Загрузка...</div>;
  if (errorServices) return <div>Ошибка: {errorServices.message}</div>;

  return (
    <section className={styles.section}>
      {isAdmin && (
        <button onClick={handleAdd} className={styles.addBtn}>
          Добавить услугу
        </button>
      )}
      
      <div className={styles.cards}>
        {services.map((service) => (
          <Service 
            key={service.id} 
            {...service}
            isAdmin={isAdmin}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {formOpen && (
        <ServiceForm
          initialData={editData || {}}
          onSubmit={handleFormSubmit}
          onCancel={() => dispatch(closeServiceForm())} // dispatch
        />
      )}
    </section>
  );
};

export default ServiceSect;
