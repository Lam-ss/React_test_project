import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = (props) => {




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs
            store={props.store} />} />
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
