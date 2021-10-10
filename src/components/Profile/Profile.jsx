import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';





const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;