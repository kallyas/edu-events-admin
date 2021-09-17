import { UPLOAD_EVENT_IMAGE } from "../actions/types";

const initialState = {
    imageUrl: "",
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_EVENT_IMAGE:
      return {
        ...state,
        imageUrl: action.payload.imageUrl,
      }
    default:
      return state;
  }
}