import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you", likeCount: 12 },
                { id: 2, message: "It\'s my first post", likeCount: 5 },
                { id: 3, message: "It my first post", likeCount: 5 },
                { id: 4, message: "It my first post", likeCount: 5 },
                // { id: 5, message: "It my first post", likeCount: 5 },
                // { id: 6, message: "It my first post", likeCount: 5 },
            ],
            newPostText: 'write some',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dim" },
                { id: 2, name: "And" },
                { id: 3, name: "Sve" },
                { id: 4, name: "Sash" },
                { id: 5, name: "Vik" },
                { id: 6, name: "Val" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo1" },
                { id: 5, message: "Yo2" },
                { id: 6, message: "Yo3" },
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);



        
        this._callSubscriber(this._state);
        

    },
}













export default store
window.store = store