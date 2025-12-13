import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProviders } from './presentation/providers/AppProviders';
import { ROUTES } from './domain/constants/routes';

// Импорты страниц
import HomePage from './presentation/pages/HomePage';
import AboutPage from './presentation/pages/AboutPage';
import RulesPage from './presentation/pages/RulesPage';
import ContactsPage from './presentation/pages/ContactsPage';
import ServicesPage from './presentation/pages/ServicesPage';
import NewsPage from './presentation/pages/NewsPage';
import AuthPage from './presentation/pages/AuthPage';
import ProfilePage from './presentation/pages/ProfilePage';
import BookingPage from './presentation/pages/BookingPage';

import './App.css';

function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.RULES} element={<RulesPage />} />
        <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTES.ADMIN_SERVICES} element={<ServicesPage isAdmin={true} />} />
        <Route path={ROUTES.NEWS} element={<NewsPage />} />
        <Route path={ROUTES.ADMIN_NEWS} element={<NewsPage isAdmin={true} />} />
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.BOOKING} element={<BookingPage />} />
      </Routes>
    </AppProviders>
  );
}

export default App;
