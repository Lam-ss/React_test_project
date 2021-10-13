import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator } from '../../../redux/state'
import { updateNewPostTextActionCreator } from '../../../redux/state'


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(
        p => <Post message={p.message} likeCount={p.likeCount} />
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
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