import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';

const App = (props) => {




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/users' render={() => <Users />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
