import createEvent from "../service/EventService";
import getEvents from "../service/getEventsService";
import { ADD_EVENT, GET_EVENTS } from "./types";

export const addEvent = (event) => dispatch => {
    createEvent(event).then(data => {
        dispatch({
            type: ADD_EVENT,
            payload: data
        });
    })
}

export const fetchEvents = () => dispatch => {
    console.log("fetching events");
    getEvents().then(data => {
        dispatch({
            type: GET_EVENTS,
            payload: data
        });
    })
}