import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';







const DialogsContainer = () => {



    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
            
                let onNewMassageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
            
                return (<Dialogs updateNewMessageBody={onNewMassageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />)
            }
        }   
        </StoreContext.Consumer>
    )
}

export default DialogsContainer