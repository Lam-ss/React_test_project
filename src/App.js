import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersConteiner from './components/Users/UsersConteiner';

const App = (props) => {




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' 
                  render={() => <DialogsContainer />} />

          <Route path='/profile/:userId?' 
                  render={() => <ProfileContainer />} />

          <Route path='/users' 
                  render={() => <UsersConteiner />} />

          <Route path='/login' 
                  render={() => <LoginPage />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
