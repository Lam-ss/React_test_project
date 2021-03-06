import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import { Redirect } from 'react-router';







const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} key={d.id} id={d.id} />
    );

    let messagesElements = state.messages.map(
        m => <Message message={m.message} key={m.id} id={m.id} />
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    let onNewMassageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (props.isAuth === false) return <Redirect to={'/login'} />;


    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMassageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs