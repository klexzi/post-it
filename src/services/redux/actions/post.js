export const addPost = post => {
  return {
    type: "ADD_POST",
    post: {
      id: 5,
      ...post
    }
  };
};

export const removePost = ({ id }) => {
  return {
    type: "REMOVE_POST",
    id
  };
};

export const editPost = (id, { update }) => {
  return {
    type: "EDIT_POST",
    id,
    update
  };
};
