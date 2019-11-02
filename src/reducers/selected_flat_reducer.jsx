function selectedFlatReducer(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'SELECT_FLAT') {
    return action.payload;
  }
  return state;
}

export default selectedFlatReducer;
