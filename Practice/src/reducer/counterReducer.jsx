export const Initial_State = {
  counter: 0,
};

export const Actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return { counter: state.counter + 1 };

    case Actions.DECREMENT:
      return { counter: state.counter - 1 };
  }
};
