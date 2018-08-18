import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// const login = (state = { status: false }, action) => {
//   switch (action.type) {
//     case "Login":
//       return { status: true };
//     case "Logout":
//       return { status: false };
//     default:
//       return state;
//   }
// };

const addPost = post => {
  return {
    type: "ADD_POST",
    post: {
      id: 5,
      ...post
    }
  };
};

const removePost = ({ id }) => {
  return {
    type: "REMOVE_POST",
    id
  };
};

const editPost = (id, { update }) => {
  return {
    type: "EDIT_POST",
    id,
    update
  };
};

const posts = [
  {
    id: uuid(),
    userId: "user_1",
    text: "this is the text of the post",
    image: "https://picsum.photos/200/300?image=1080",
    likes: 0,
    dateCreated: 0
  },
  {
    id: 5,
    userId: "user_1",
    text: "this is the text of the post",
    image: "https://picsum.photos/200/300?image=1080",
    likes: 0,
    dateCreated: 0
  }
];
const filters = {
  text: "",
  category: ""
};

const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "REMOVE_POST":
      return state.filter(post => {
        return post.id !== action.id;
      });
    case "EDIT_POST":
      return state.map(val => {
        console.log(val.id);
        console.log(action.id);
        if (val.id === action.id) {
          return {
            ...val,
            ...action.update
          };
        } else return val;
      });
    default:
      return state;
  }
};

const visiblePosts = posts => {
  return posts;
};

const filterReducer = (state = filters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    post: postReducer,
    filter: filterReducer
  })
);

store.dispatch(addPost(posts[0]));
store.dispatch(
  addPost({
    userId: "user_1",
    text: "this is the text of the second post",
    image: "https://picsum.photos/200/300?image=1080",
    likes: 0,
    dateCreated: 0
  })
);

store.dispatch(removePost({ id: posts[0].id }));

store.dispatch(
  editPost(posts[1].id, {
    update: { text: "This is the edited text of the post" }
  })
);
store.subscribe(() => {
  console.log(store.getState());
  visiblePosts(state.posts);
});
