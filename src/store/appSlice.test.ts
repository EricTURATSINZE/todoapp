import { Task } from "../types/task";
import appReducer, { addTask, AppState } from "./appSlice";

describe("appSlice", () => {
  it("Should handle inital State", () => {
    const state = appReducer(undefined, { type: "unknown" });
    expect(state.tasks).toEqual([]);
  });

  it("should handle setting tasks state", () => {
    const newTask: Task = {
      id: 1,
      todo: "Learn guitar",
      completed: false,
      userId: 5,
    };
    const state = appReducer(undefined, addTask(newTask));
    expect(state.tasks).toContainEqual(newTask);
  });

  it("should handle adding a new task", () => {
    const initialState: AppState = {
      tasks: [
        {
          id: 1,
          todo: "Learn guitar",
          completed: false,
          userId: 5,
        },
      ],
    };
    const newTask: Task = {
      id: 2,
      todo: "Learn Piano",
      completed: false,
      userId: 5,
    };
    const state = appReducer(initialState, addTask(newTask));
    expect(state.tasks).toHaveLength(2);
  });
});
