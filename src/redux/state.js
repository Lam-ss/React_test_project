const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 7,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 7, message: body });
            this._callSubscriber(this._state);
        }

    },
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
        ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
        ({ type: UPDATE_NEW_MESSAGE_BODY, newText: body })







export default store
window.store = store