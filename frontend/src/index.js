import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
     initialColorMode: "light", // Set the initial color mode to light
     useSystemColorMode: false, // Disable automatic color mode switching based on system settings
  },
 });

 // Manually set the color mode in localStorage
localStorage.setItem('chakra-ui-color-mode', 'light'); // Use 'light' for light mode

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
