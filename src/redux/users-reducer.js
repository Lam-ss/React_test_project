const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';



let initialState = {
    users: [
        // { id: 1, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry", status: "I am", location: { city: 'Minsk', country: "Belarus" } },
        // { id: 2, photoUrl: '../../../my_img/ava.jfif', followed: true, fullName: "Dmitry2", status: "I am2", location: { city: 'Moscow', country: "Russia" } },
        // { id: 3, photoUrl: '../../../my_img/ava.jfif', followed: false, fullName: "Dmitry3", status: "I am3", location: { city: 'Kiev', country: "Ukraine" } },
    ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage:  1,
    // isFeating:  1,
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
                users: action.users,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }



        default:
            return state;
    }


}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })


export default usersReducer;