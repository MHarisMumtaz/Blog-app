import { ADD_USER, SET_LOGIN_USER } from "../Constants/Action-Types";

const usersInitialState = {
	all : [],
	loginUser : null
}

const users = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
       return [...state.all, action.payload];
    case SET_LOGIN_USER:
       return Object.assign({}, state, {
        loginUser: action.payload
      });
    default:
      return state;
  }
};
export default users;