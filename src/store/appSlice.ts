import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/task";

export interface AppState {
    tasks: Task[];
}

const initialState: AppState = {
    tasks: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.unshift(action.payload);
        },
    },
});

export const { setTasks, addTask } = appSlice.actions;
export default appSlice.reducer;