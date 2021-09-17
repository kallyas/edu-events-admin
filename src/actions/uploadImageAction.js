import UploadImageService from "../service/UploadImageService";
import { UPLOAD_EVENT_IMAGE } from "./types";

export const uploadImageAction = (file) => dispatch => {
    UploadImageService(file).then(url => {
        dispatch({
            type: UPLOAD_EVENT_IMAGE,
            payload: {
                url
            }
        });
    })
}