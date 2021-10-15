import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext_del';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
);

// let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <StoreContext.Provider value={store}>
//         <App />
//       </StoreContext.Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };






reportWebVitals();

// <App state={store.getState()} 
// dispatch={store.dispatch.bind(store)} store={store} />