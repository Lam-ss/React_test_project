const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
};


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 7, message: body });
            return state;
        default:
            return state;

    }


}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newText: body })

export default dialogReducer