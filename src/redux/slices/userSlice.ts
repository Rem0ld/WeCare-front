import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../redux/store";
import { User, UserStore } from '../../types/user.types';

const initialState: UserStore = {
    user: {},
    isLogged: false,
    accessToken: "",
    role: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogged = true;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.role = action.payload.role;
        },
        logout: () => {
            return initialState;
        },
        refreshToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const { login, logout, refreshToken } = userSlice.actions;

export default userSlice.reducer;