import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu, closeMobileMenu } from '../.../../infrastructure/store/slices/uiSlice'; 
import { useAuth } from '../.../../application/contexts/AuthContext';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const isMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  const dispatch = useDispatch();
  
  const { user } = useAuth();

  return (
    <header className={styles.header}>
      <button 
        className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
        onClick={() => dispatch(toggleMobileMenu())} // dispatch
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={styles.logo}>
        <a href="/"><img src="/LilLogo.svg" alt="Лого мини" /></a>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/rules">Правила</Link></li>
          <li><Link to="/news">Новости</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>

      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.active : ''}`}>
        <nav className={styles.mobileNav}>
          <ul>
            <li><Link to="/about" onClick={() => dispatch(closeMobileMenu())}>О нас</Link></li>
            <li><Link to="/services" onClick={() => dispatch(closeMobileMenu())}>Услуги</Link></li>
            <li><Link to="/rules" onClick={() => dispatch(closeMobileMenu())}>Правила</Link></li>
            <li><Link to="/news" onClick={() => dispatch(closeMobileMenu())}>Новости</Link></li>
            <li><Link to="/contacts" onClick={() => dispatch(closeMobileMenu())}>Контакты</Link></li>
          </ul>
        </nav>
      </div>

      <div className={styles.avatar}>
        <a href={user ? "/profile" : "/auth"}>
          <img 
            src={user?.avatar || "/User.svg"} 
            alt={user ? "Профиль" : "Авторизация"} 
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
