const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
import { createStore } from "redux";

const initialState = {
  task: [],
  isLoading: false,
};

//Step 1: Create a simple reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

// Step 2: Create the Redux store using the reducer
const store = createStore(taskReducer);
console.log(store);

// Step 3: Log the initial state
// The getState method is a synchronous function that returns the current state of a Redux application. It includes the entire state of the application, including all the reducers and their respective states.

console.log("inital State", store.getState());

// Step 4: Dispatch an action to add a task
store.dispatch(addTask("Buy TT code"));
console.log("updated State", store.getState());

// store.dispatch({ type: ADD_TASK, payload: "Buy Mango" });
store.dispatch(addTask("Buy Mango"));
console.log("updated State", store.getState());

// store.dispatch({ type: DELETE_TASK, payload: 1 });
store.dispatch(deleteTask(1));
console.log("deleted State", store.getState());

// step 5: Create action creators
const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
