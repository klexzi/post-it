export default (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "EDIT_USER":
      return state.map(val => {
        //   console.log(val.id);
        //   console.log(action.id);
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
