import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../redux/store";
import { User, UserStore } from '../../types/user.types';

const initialState: UserStore = {
    user: {},
    isLogged: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogged = true,
            state.user = action.payload
        },
        logout: (state, action) => {
            state.isLogged = false,
            state.user = {}
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;