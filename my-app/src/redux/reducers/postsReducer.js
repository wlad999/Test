let GET_POSTS = "GET_POSTS";

let initialState = {
  posts: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
};

const potsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    //   case UNFOLLOW:
    //     return {
    //       ...state,
    //       users: state.users.map(u => {
    //         if (u.id === action.userId) {
    //           return { ...u, followed: false };
    //         }
    //         return u;
    //       }),
    //     };
    //   case SET_USERS: {
    //     return { ...state, users: action.users };
    //   }
    //   case SET_CURRENT_PAGE: {
    //     return { ...state, currentPage: action.currentPage };
    //   }
    //   case SET_TOTAL_USERS_COUNT: {
    //     return { ...state, totalUsersCount: action.count };
    //   }
    //   case TOGGLE_IS_FETCHING: {
    //     return { ...state, isFetching: action.isFetching };
    //   }
    //   case TOGGLE_IS_FOLLOWING_PROGRESS: {
    //     return {
    //       ...state,
    //       followingInProgress: action.isFetching
    //         ? [...state.followingInProgress, action.userId]
    //         : state.followingInProgress.filter(id => id !== action.userId),
    //     };
    //   }
    default:
      return state;
  }
};

export default potsReducer;
