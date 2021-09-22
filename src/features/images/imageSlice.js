import { createSlice } from "@reduxjs/toolkit";
import UploadImageService from "../../service/UploadImageService";

const initialState = {
    imageUrl: "",
    uploading: false,
    uploaded: false,
    hasErrors: false,
}

export const imageSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        uploadImage: state => state.uploading = true,
        imageUploaded: state => {
            state.uploading = false;
            state.uploaded = true;
        },
        imageUploadSuccess: (state, { payload }) => {
            state.imageUrl = payload;
            state.uploaded = true;
            state.uploading = false;
            state.hasErrors = false;
        },
        imageUploadError: state => {
            state.uploading = false;
            state.uploaded = false;
            state.hasErrors = true;
        }
    }
})

export const { uploadImage, imageUploaded, imageUploadSuccess, imageUploadError } = imageSlice.actions;

export default imageSlice.reducer;

export const imageSelector = state => state?.imageUrl;

export const uploadImageAsync = (image) =>  {
    return async dispatch => {
        UploadImageService(image).then(res => {
            dispatch(imageUploadSuccess(res))
        }).catch(err => {
            dispatch(imageUploadError(err))
        })
    }
}