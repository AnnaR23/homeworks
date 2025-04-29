import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import { store } from './redux/store';


//рендерим приложение и оборачиваем в Provider для доступа в store
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
