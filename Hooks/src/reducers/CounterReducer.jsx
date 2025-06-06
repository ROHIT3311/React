export const Initial_State = {
  count: 0,
};

export const ACTIONS = {
  Increment: "Increment",
  Decrement: "Decrement",
};

export const CounterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.Increment:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTIONS.Decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      break;
  }
};
