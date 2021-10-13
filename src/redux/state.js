let rerenderEntireTree = () => {
    console.log('State changed')
}

let state = {

    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you", likeCount: 12 },
            { id: 2, message: "It\'s my first post", likeCount: 5 },
            { id: 3, message: "It my first post", likeCount: 5 },
            { id: 4, message: "It my first post", likeCount: 5 },
            // { id: 5, message: "It my first post", likeCount: 5 },
            // { id: 6, message: "It my first post", likeCount: 5 },
        ],
        newPostText: '',
    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Dim" },
            { id: 2, name: "And" },
            { id: 3, name: "Sve" },
            { id: 4, name: "Sash" },
            { id: 5, name: "Vik" },
            { id: 6, name: "Val" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo1" },
            { id: 5, message: "Yo2" },
            { id: 6, message: "Yo3" },
        ]
    },

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount:7,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state