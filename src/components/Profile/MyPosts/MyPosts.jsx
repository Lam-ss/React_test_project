import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';





const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(
        p => <Post message={p.message} likeCount={p.likeCount} />
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
            </div>
            <div>
                <button onClick={addPost} >Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;