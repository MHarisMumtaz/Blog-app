import { ADD_BLOG } from "../Constants/Action-Types";

const initialState = [
		{id:1, author:"Haris", topic:"React.js", article:"In computing, React (sometimes React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5, and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful. We will explain this more in one of the next chapters. We will also use EcmaScript 2015 syntax so any knowledge in this area can be helpful."},
		{id:2, author:"Ahmed", topic:"Senses",  article:"this is aritcle"}
]

const blogs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
       action.payload.id = state.length;
       return [...state, action.payload];
    default:
      return state;
  }
};
export default blogs;