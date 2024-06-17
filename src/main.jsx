import React from 'react'; // Importa a biblioteca React.
import ReactDOM from 'react-dom/client'; // Importa o módulo para renderizar o React no DOM.
import App from './App.jsx'; // Importa o componente principal da aplicação.
import './styles/main.scss'; // Importa os estilos globais da aplicação.

ReactDOM.createRoot(document.getElementById('root')).render( // Cria a raiz do React e renderiza o componente `App` dentro do elemento com id 'root'.
  <React.StrictMode> {/* `React.StrictMode` é um componente que verifica problemas potencialmente perigosos no React.*/}
    <App /> {/* Componente principal da aplicação.*/}
  </React.StrictMode>,
);
