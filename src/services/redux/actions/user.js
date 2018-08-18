export const addUser = user => {
  return {
    type: "ADD_USER",
    user: {
      id: 5,
      ...user
    }
  };
};

export const editUser = (id, { update }) => {
  return {
    type: "EDIT_USER",
    id,
    update
  };
};
