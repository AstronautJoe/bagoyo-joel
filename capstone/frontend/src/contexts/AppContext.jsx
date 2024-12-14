import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/Toast';
import { useQuery } from 'react-query'; // Fixed import statement
import * as apiClient from '../api-client'; // Added missing import for apiClient

// Create the AppContext with an initial value of undefined
const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  // State for toast messages
  const [toast, setToast] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to show a toast message
  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  // Check if the user is logged in using a token validation query
  useQuery('validateToken', apiClient.validateToken, {
    retry: false,
    onError: () => setIsLoggedIn(false),
    onSuccess: () => setIsLoggedIn(true),
  });

  return (
    <AppContext.Provider
      value={{
        // These all can be accessed by all components
        showToast,
        isLoggedIn,
      }}
    >
      {/* Render the toast component if a toast message is present */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);

  // Ensure the context is being used within a provider
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
};
