import { Dispatch } from "redux";
import { User } from "../../types/user.types";
import { ActionTypes } from "../types";

export interface GetUsersAction {
  type: ActionTypes.getUsers;
  payload: User[];
}

export interface DeleteUserAction {
  type: ActionTypes.deleteUser;
  payload: string;
}

export interface AddUserAction {
  type: ActionTypes.addUser;
  payload: User;
}

export interface EditUserAction {
  type: ActionTypes.editUser;
  payload: {
    id: number;
    email: string;
  };
}

export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response: any = null; //await call api
      dispatch<GetUsersAction>({
        type: ActionTypes.getUsers,
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUser = (
  state: User[],
  password: string,
  email: string,
  callback?: any
) => {
  const newUser = {
    email,
    password
  };
  return async (dispatch: Dispatch) => {
    try {
      dispatch<AddUserAction>({ type: ActionTypes.addUser, payload: newUser });
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteUser = (email: User["email"], callback?: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch<DeleteUserAction>({
            type: ActionTypes.deleteUser,
            payload: email
        });
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUser = (
  id: number,
  name: string,
  email: string,
  callback?: any
) => {
  return async (dispatch: Dispatch) => {
    try {
      await //call api

      dispatch<EditUserAction>({
        type: ActionTypes.editUser,
        payload: { id, email }
      });
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };

};