import HomePage from './pages/HomePage';
import './App.css';
import AboutUs from './pages/AboutUs';
import Rules from './pages/Rules';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import News from './pages/News';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
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
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/rules" element={<Rules />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/admin/services" element={<Services isAdmin={true} />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/admin/news" element={<News isAdmin={true} />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/booking" element={<Booking />} />
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
