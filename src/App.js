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
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
