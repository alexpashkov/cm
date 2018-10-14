const types = {
  FETCH: "CLIENTS_FETCH",
  SET: "CLIENTS_SET"
};

export const fetch = () => ({
  type: types.FETCH
});

export const set = payload => ({
  type: types.SET,
  payload
});

export default types;
