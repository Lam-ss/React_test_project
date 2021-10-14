import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {

    // let state = props.store.getState();



    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    // let text = newPostElement.current.value;
                    // props.addPost();
                    store.dispatch(addPostActionCreator());
                };
            
                let onPostChange = (text) => {
                    // props.updateNewPostText(text);
                    // let action = { type: 'UPDADE-NEW-POST-TEXT', newText: text };
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />
                )
            }
        }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;