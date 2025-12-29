
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/themeSlice'  // it was by the default export i did of the theme.reducer

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch