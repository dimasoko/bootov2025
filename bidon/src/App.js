import HomePage from './pages/HomePage';
import './App.css';
import AboutPage from './pages/AboutPage';
import RulesPage from './pages/RulesPage';
import ContactsPage from './pages/ContactsPage';
import ServicesPage from './pages/ServicesPage';
import NewsPage from './pages/NewsPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import BookingPage from './pages/BookingPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BookingProvider } from './contexts/BookingContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';


const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10, 
      },
      
    },
    
});

function App() {

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <BookingProvider>
              <ProfileProvider>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/rules" element={<RulesPage />} />
                  <Route path="/contacts" element={<ContactsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/admin/services" element={<ServicesPage isAdmin={true} />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/admin/news" element={<NewsPage isAdmin={true} />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/booking" element={<BookingPage />} />
                </Routes>
                <ReactQueryDevtools initialIsOpen={false}/>
              </ProfileProvider>
            </BookingProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
