import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext_del';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer> 
//         {
//             (store) => {
//                 let state = store.getState().dialogsPage;

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
            
//                 let onNewMassageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
            
//                 return (<Dialogs updateNewMessageBody={onNewMassageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={state} />)
//             }
//         }   
//         </StoreContext.Consumer>
//     )
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);





export default DialogsContainer

