import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 'store' değişkenini 'const' anahtar kelimesi ile tanımlıyoruz
const store = configureStore()

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
