const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {
    users: [
        // { id: 1, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry", status: "I am", location: { city: 'Minsk', country: "Belarus" } },
        // { id: 2, photoUrl: '../../../my_img/ava.jfif', followed: true, fullName: "Dmitry2", status: "I am2", location: { city: 'Moscow', country: "Russia" } },
        // { id: 3, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry3", status: "I am3", location: { city: 'Kiev', country: "Ukraine" } },
    ],
};



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;

                })

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;

                })

            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }



        default:
            return state;
    }


}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;