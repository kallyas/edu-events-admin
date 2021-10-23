import { createSlice } from "@reduxjs/toolkit";
import getUsers, { searchUsers } from "../../service/getUserService";

const initialState = {
  users: [],
  loading: false,
  hasErrors: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    fetchUsersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions;

export const usersSelector = (state) => state?.users;

export default usersSlice.reducer;

export const fetchUsersAsync = () => {
  return async (dispatch) => {
    getUsers()
      .then((users) => {
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

export const searchUsersAsync = (search) => async (dispatch) => {
  try {
    dispatch(fetchUsers());
    const users = await searchUsers(search);
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};
