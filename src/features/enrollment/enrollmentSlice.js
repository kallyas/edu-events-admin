import { createSlice } from "@reduxjs/toolkit";
import getEnrollment, { searchEnrollment } from "../../service/getEnrollment";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    getEnrollmentStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getEnrollmentSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    getEnrollmentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getEnrollmentStart,
  getEnrollmentSuccess,
  getEnrollmentFailure,
} = enrollmentSlice.actions;

export const enrollmentSelector = (state) => state?.enrollment;

export default enrollmentSlice.reducer;

export const getEnrollmentAsync = () => async (dispatch) => {
  try {
    dispatch(getEnrollmentStart());
    const data = await getEnrollment();
    dispatch(getEnrollmentSuccess(data));
  } catch (error) {
    dispatch(getEnrollmentFailure(error));
  }
};

export const searchEnrollmentAsync = (enrollment) => async (dispatch) => {
  try {
    dispatch(getEnrollmentStart());
    const data = await searchEnrollment(enrollment);
    dispatch(getEnrollmentSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getEnrollmentFailure(error));
  }
};
