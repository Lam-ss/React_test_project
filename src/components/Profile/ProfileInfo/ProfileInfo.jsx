import s from './ProfileInfo.module.css';
import ava from '../../../my_img/images.jfif';
import Preloader from '../../common/Preloader/Preloader';





const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }



    return (
        <div>
            <div>
                <img src={ava}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;