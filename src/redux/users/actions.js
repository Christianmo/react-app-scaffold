import { GET_USERS } from '@constants/actionNames';
import userServices from '@services/userServices';

const usersTarget = 'users';


const userActions = {
  getUsers: (success, failure) => ({
    type: GET_USERS,
    target: usersTarget,
    service: userServices.getUsers(),
    response: resp => resp.data,
    success,
    failure,
  }),
};

export default userActions;
