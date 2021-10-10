import s from './Post.module.css';





const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTf1nGSgVM8Oc_drnppk8wmDGZ1uUegROMw&usqp=CAU' />
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;