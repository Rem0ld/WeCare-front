import { User } from "../../types/user.types";
import { Action, ActionTypes } from "../types";

export const usersReducer = (state: User[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.getUsers:
      return action.payload;
    case ActionTypes.deleteUser:
      return state.filter((user: User) => user.email !== action.payload);
    case ActionTypes.addUser:
      return [...state, action.payload];
    case ActionTypes.editUser:
      return state.map((user: User) =>
        user.id === action.payload.id
          ? { ...user, email: action.payload.email }
          : user
      );
    
    default:
      return state;
  }
};