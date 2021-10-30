import s from './ProfileInfo.module.css';
import ava from '../../../my_img/images.jfif';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';





const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            {/* <div>
                 <img src={ava}/>
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello my friends"} />
            </div>
        </div>
    )
}

export default ProfileInfo;