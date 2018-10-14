const types = {
  API_FETCH_ERROR: "API_FETCH_ERROR"
};

export const APIFetchError = payload => ({
  type: types.API_FETCH_ERROR,
  payload
});
