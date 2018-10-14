const types = {
  POLL_START: "POLL_START",
  POLL: "POLL"
};

export const start = () => ({
  type: types.POLL_START
});

export const poll = () => ({
  type: types.POLL
});

export default types;
