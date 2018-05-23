import { ADD_BLOG, ADD_COMMENT, ADD_USER, SET_LOGIN_USER } from "../Constants/Action-Types";

export const addBlog = blog => ({ type: ADD_BLOG, payload: blog });

export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });

export const addUser = user => ({ type: ADD_USER, payload: user });

export const setLoginUser = user => ({ type: SET_LOGIN_USER, payload: user });