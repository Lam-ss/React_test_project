import s from './ProfileInfo.module.css';
import ava from '../../../my_img/images.jfif';





const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img src={ava}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;