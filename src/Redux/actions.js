import { ADD_TODO } from "./actionTypes";
import { REMOVE_TODO } from "./actionTypes";
//action creator

//these functions create  and returns an action object
//from given argument

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});
