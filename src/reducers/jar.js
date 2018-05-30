const INITIAL_STATE = {
  jars: {},
};

const applySetJars = (state, action) => ({
  ...state,
  jars: action.jars
});

const jarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'JARS_SET':
      return applySetJars(state, action);
    default:
      return state;
  }
}

export default jarReducer;