import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext_del';
import { connect } from 'react-redux';


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//         {
//             (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     // let text = newPostElement.current.value;
//                     // props.addPost();
//                     store.dispatch(addPostActionCreator());
//                 };
            
//                 let onPostChange = (text) => {
//                     // props.updateNewPostText(text);
//                     // let action = { type: 'UPDADE-NEW-POST-TEXT', newText: text };
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action);
//                 }
//                 return (
//                     <MyPosts updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText} />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;