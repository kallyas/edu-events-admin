/* eslint-disable no-unused-vars */
import app from '../config/firebaseInit';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const storage = getStorage();
let progress;
let imgUrl;

export default async function UploadImageService(image) {
  const storageRef = ref(storage,`events/${new Date().getTime().toString().concat(image?.name)}`);

  const uploadTask = await uploadBytesResumable(storageRef, image)

  const imgUrl = await getDownloadURL(storageRef);
  console.log(imgUrl);

  return imgUrl; 
}
