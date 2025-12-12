import { useSelector, useDispatch } from 'react-redux';
import { openNewsForm, closeNewsForm } from '../../store/slices/modalsSlice'; 
import News from './News';
import styles from './NewsSect.module.css';
import { useNews } from './useNews';
import { useNewsMutations } from './useNewsMutations';
import NewsForm from './NewsForm';

const NewsSect = ({ isAdmin = false }) => {
  const { isOpen: formOpen, editData } = useSelector((state) => state.modals.newsForm);
  const dispatch = useDispatch();

  const { news, errorNews, isLoadingNews } = useNews();
  const { addMutation, editMutation, deleteMutation } = useNewsMutations();

  const handleEdit = (id) => {
    const newsItem = news.find(n => n.id === id);
    dispatch(openNewsForm(newsItem)); // dispatch с данными
  };

  const handleDelete = (id) => {
    if (window.confirm('Удалить эту новость?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleAdd = () => {
    dispatch(openNewsForm(null)); // dispatch без данных
  };

  const handleFormSubmit = (data) => {
    if (editData) {
      editMutation.mutate({ id: editData.id, ...data });
    } else {
      addMutation.mutate(data);
    }
    dispatch(closeNewsForm());
  };

  if (isLoadingNews) return <div>Загрузка...</div>;
  if (errorNews) return <div>Ошибка: {errorNews.message}</div>;

  return (
    <section className={styles.section}>
      {isAdmin && (
        <button onClick={handleAdd} className={styles.addBtn}>
          Добавить новость
        </button>
      )}
      
      <div className={styles.cards}>
        {news.map((newsItem) => (
          <News 
            key={newsItem.id} 
            {...newsItem}
            isAdmin={isAdmin}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {isAdmin && formOpen && (
        <NewsForm
          initialData={editData || {}}
          onSubmit={handleFormSubmit}
          onCancel={() => dispatch(closeNewsForm())}
        />
      )}
    </section>
  );
};

export default NewsSect;
