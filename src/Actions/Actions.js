import { ADD_BLOG, ADD_COMMENT } from "../Constants/Action-Types";

export const addBlog = blog => ({ type: ADD_BLOG, payload: blog });

export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });