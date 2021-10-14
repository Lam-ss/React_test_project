import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer'


const MyPosts = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} likeCount={p.likeCount} />
    )

    let newPostElement = React.createRef();

    let onAddPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
        // props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // let action = { type: 'UPDADE-NEW-POST-TEXT', newText: text };
        // let action = updateNewPostTextActionCreator(text)
        // props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost} >Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;