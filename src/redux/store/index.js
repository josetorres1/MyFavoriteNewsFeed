import { configureStore } from "@reduxjs/toolkit"

import { postSlice, commentsSlice } from "../slices/index"

export default configureStore({
    reducer: {
        posts: postSlice.reducer,
        comments: commentsSlice.reducer,
    },
})
