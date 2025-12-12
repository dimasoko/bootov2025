import React from 'react';
import { useProfile } from '../../contexts/ProfileContext';
import './ProfilePage.module.css';
import { Link } from 'react-router-dom';


export default function ProfilePage() {
  const { 
    userName, 
    visits, 
    loadingVisits, 
    error, 
    onSchedule, 
    onLogout 
  } = useProfile();

  if (loadingVisits) {
    return <div>Загрузка профиля...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__greeting">Добрый день, {userName}</h1>
        <Link 
          to="/booking"
          className="profile__btn profile__btn--primary">
          Записаться
        </Link>
      </header>

      <section className="profile__history">
        <h2 className="profile__title">История посещений</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Где были</th>
              <th>Когда были</th>
              <th>Во сколько были</th>
            </tr>
          </thead>
          <tbody>
            {visits.map(({ id, place, date, time }) => (
              <tr key={id}>
                <td>{place}</td>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="profile__footer">
        <button 
          className="profile__btn profile__btn--secondary" 
          onClick={onLogout}
        >
          Выйти
        </button>
      </footer>
    </div>
  );
}