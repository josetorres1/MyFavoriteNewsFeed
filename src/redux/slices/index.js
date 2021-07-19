import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((posts) => {
            console.log(posts)
            return posts
        })
    console.log(response)
    return response
})

const initialState = {
    posts: {
        data: [],
        status: "idle",
        error: null,
        page: 1,
    },
    comments: {
        data: [],
        status: "idle",
        error: null,
    },
}
export const postSlice = createSlice({
    name: "post",
    initialState: initialState.posts,
    reducers: {
        incrementPage(state) {
            state.page = state.page + 1
        },
        decrementPage(state) {
            state.page = state.page - 1
        },
        selectPage(state, action) {
            state.page = action.payload.page
        },
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchPosts.fulfilled]: (state, action) => {
            console.log(state)
            state.status = "fulfilled"
            state.data = state.data.concat(action.payload)
        },
    },
})

export const commentsSlice = createSlice({
    name: "comments",
    initialState: initialState.comments,
    reducers: {},
})

export const AllPostsByPage = (state) => state.posts.data.slice(1 + (state.posts.page - 1) * 10, state.posts.page * 10)

export const getAmountOfPostPages = (state) => state.posts.data.length / 10

export const getPostByID = (state, id) => {
    console.log(typeof id)
    console.log(state)

    return state.posts.data.find((post) => post.id === Number(id))
}

export const selectCommentsByPost = (state, postId) => {
    return state.comments.data.filter((comment) => comment.postId === postId)
}
