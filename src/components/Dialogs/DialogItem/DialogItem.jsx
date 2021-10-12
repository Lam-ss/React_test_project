import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem