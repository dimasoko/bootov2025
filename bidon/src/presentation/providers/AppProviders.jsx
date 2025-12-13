import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '../../application/contexts/AuthContext';
import { BookingProvider } from '../../application/contexts/BookingContext';
import { ProfileProvider } from '../../application/contexts/ProfileContext';
import store from '../../infrastructure/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  },
});

export const AppProviders = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <BookingProvider>
              <ProfileProvider>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </ProfileProvider>
            </BookingProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ReduxProvider>
  );
};
