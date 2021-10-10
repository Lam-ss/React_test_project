import s from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' />
                <Post message='It my first post' />
            </div>
        </div>
    )
}

export default MyPosts;