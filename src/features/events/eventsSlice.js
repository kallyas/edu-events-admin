import { createSlice } from "@reduxjs/toolkit";
import createEvent from "../../service/EventService";
import getEvents from "../../service/getEventsService";

const initialState = {
  events: [],
  loading: false,
  hasErrors: false,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchEvents: (state) => {
      state.loading = true;
    },
    fetchEventsSuccess: (state, { payload }) => {
      state.events = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    fetchEventsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    filterEvents: (state, { payload }) => {
      state.events = payload;
    }
  },
});

export const { fetchEvents, fetchEventsSuccess, fetchEventsFailure } = eventsSlice.actions;

// a selector
export const eventsSelector = (state) => state?.events;

// the reducer
export default eventsSlice.reducer;

// Asynchronus thunk actionn
export const fetchEventsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchEvents());
    try {
      getEvents().then((events) => dispatch(fetchEventsSuccess(events)));
    } catch (error) {
      dispatch(fetchEventsFailure(error));
    }
  };
};

export const createEventAsync = (event) => {
  return async (dispatch) => {
    createEvent(event)
      .then((response) => {
        dispatch(fetchEventsAsync());
        dispatch(fetchEventsSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchEventsFailure(error));
      });
  };
};
