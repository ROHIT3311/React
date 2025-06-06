export const Initial_State = {
  counter: 0,
};

export const counterReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Increment":
      return {
        counter: state.counter + 1,
      };

    case "Decrement":
      return {
        counter: state.counter - 1,
      };

    default:
      return {
        counter: state.counter,
      };
  }
};
