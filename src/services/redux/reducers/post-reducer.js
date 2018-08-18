export default (state = [], action) => {
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
