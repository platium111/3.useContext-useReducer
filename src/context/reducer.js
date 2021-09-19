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
  RESTE: "RESET",
  CHANGE_AGE: "CHANGE_AGE",
  CHANGE_FOLLOWER: "CHANGE_FOLLOWER",
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
    case TYPES.RESET:
      break;
    default:
      return state;
  }
};
