const initialState = {
  posts: {
    ids: [],
    entities: {},
    status: "idle",
    error: null,
    page: 1,
  },
  comments: {
    ids: [],
    entities: {},
    status: "idle",
    error: null,
  },
};

export default initialState;
