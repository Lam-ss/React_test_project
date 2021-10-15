import { combineReducers, createStore } from "redux";
import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
});



let store = createStore(reducers);

window.store = store;

export default store;
