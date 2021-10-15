const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';



let initialState = {
    users: [
        { id: 1, followed: false, fullName: "Dmitry", status: "I am", location: {city: 'Minsk', country: "Belarus"} },
        { id: 2, followed: true, fullName: "Dmitry2", status: "I am2", location: {city: 'Moscow', country: "Russia"} },
        { id: 3, followed: false, fullName: "Dmitry3", status: "I am3", location: {city: 'Kiev', country: "Ukraine"} },
    ],
};



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;

                })

            }

        case UNFOLLOW: {
    return {};
}
        default:
return state;
    }


}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })


export default usersReducer;