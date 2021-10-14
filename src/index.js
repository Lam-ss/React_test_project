import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



reportWebVitals();

// <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />