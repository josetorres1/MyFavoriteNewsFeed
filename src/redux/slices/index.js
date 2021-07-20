import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  nanoid,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((posts) => {
      return posts;
    });
  return response;
});

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((data) => data.json());
    return response;
  }
);

const postsAdapter = createEntityAdapter();
const commentsAdapter = createEntityAdapter();
const initialState = {
  posts: postsAdapter.getInitialState({
    status: "idle",
    error: null,
    page: 1,
  }),
  comments: commentsAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
};
export const postSlice = createSlice({
  name: "post",
  initialState: initialState.posts,
  reducers: {
    incrementPage(state) {
      const total = selectTotal({ posts: state });
      state.page = state.page < (total / 10 || 1) ? state.page + 1 : state.page;
    },
    decrementPage(state) {
      state.page = state.page > 1 ? state.page - 1 : state.page;
    },
    selectPage(state, action) {
      state.page = action.payload.page;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      postsAdapter.upsertMany(state, action.payload);
    },
  },
});

export const { incrementPage, decrementPage, selectPage } = postSlice.actions;

export const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState.comments,
  reducers: {
    addComment: {
      reducer(state, action) {
        console.log(action);
        commentsAdapter.addOne(state, action.payload);
      },
      prepare({ postId, name, email, body }) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
            body,
            postId: parseInt(postId),
          },
        };
      },
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      commentsAdapter.upsertMany(state, action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;

export const {
  selectById: getPostByID,
  selectAll,
  selectTotal,
} = postsAdapter.getSelectors((state) => state.posts);

export const AllPostsByPage = createSelector(
  [selectAll, (state) => state.posts.page],
  (posts, activePage) => posts.slice((activePage - 1) * 10, activePage * 10)
);
export const getAmountOfPostPages = createSelector(
  selectAll,
  (posts) => posts.length / 10 || 1
);

export const { selectAll: selectAllComments, selectById } =
  commentsAdapter.getSelectors((state) => state.comments);

export const selectCommentsByPost = createSelector(
  [selectAllComments, (state, action) => action.postId],
  (comments, postId) => {
    return comments
      .filter((comment) => comment.postId === parseInt(postId))
      .reverse();
  }
);
