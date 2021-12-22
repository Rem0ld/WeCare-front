import {
    GetUsersAction,
    DeleteUserAction,
    AddUserAction,
    EditUserAction
  } from "./actions/usersActions";
  
  export enum ActionTypes {
    getUsers,
    addUser,
    deleteUser,
    editUser
  }
  
  export type Action =
    | GetUsersAction
    | DeleteUserAction
    | AddUserAction
    | EditUserAction