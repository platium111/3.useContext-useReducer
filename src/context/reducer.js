export const initialAppData = {
  employments: [
    {
      companyName: "default",
      time: 0,
      salary: 0,
    },
  ],
  age: 26,
  gender: "male",
  follower: 0,
};

export const TYPES = {
  UPDATE: "UPDATE",
  RESET: "RESET",
  ADD_TODO: "ADD_TODO",
  CHANGE_AGE: "CHANGE_AGE",
  CHANGE_FOLLOWER: "CHANGE_FOLLOWER",
  TOGGLE_FIRST_TODO: "TOGGLE_FIRST_TODO",
};

export const appDataReducer = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case TYPES.CHANGE_AGE:
      return {
        ...state,
        age: data,
      };
    case TYPES.CHANGE_FOLLOWER:
      return {
        ...state,
        follower: data,
      };
    case TYPES.ADD_TODO:
      if (!state.todos) {
        state.todos = [];
      }
      return {
        ...state,
        todos: [...state.todos, action.data],
      };
    case TYPES.TOGGLE_FIRST_TODO:
      /**
       * [learn] + Object.assign([], array, {0 : newData})
       *  + change in reducer, will change the context, so need to use map() if needed to shallow copy the `state`, mean change address point of state
       *    but object inside it are still the same (can try with copare using ===)
       */
      return {
        ...state,
        todos: Object.assign([], state.todos, {
          0: { ...state.todos[0], completed: !state.todos[0].completed },
        }),
      };

    case TYPES.RESET:
      break;
    default:
      return state;
  }
};
