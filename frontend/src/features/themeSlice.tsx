

import { createSlice } from '@reduxjs/toolkit'



export const themeSlice = createSlice({
    name: "isDark",
    initialState: {
        isDark: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark
        }
    }
})


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;