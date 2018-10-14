import types from "./actions";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case types.SET:
      return payload;
    default:
      return state;
  }
};
