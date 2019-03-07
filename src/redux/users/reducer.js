import { GET_USERS } from '@constants/actionNames';

const initialState = {
  users: [],
  usersLoading: false,
  usersError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
