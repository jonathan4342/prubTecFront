import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store/store';
import './styles/Styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
      </React.StrictMode>
  </Provider>

);
