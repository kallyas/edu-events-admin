/* eslint-disable no-unused-vars */
import app from '../config/firebaseInit';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const storage = getStorage();
let progress;
let imgUrl;

export default async function UploadImageService(image) {
  const storageRef = ref(storage,`events/${new Date().getTime().toString().concat(image?.name)}`);
  const uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on('state_changed',(snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done', progress.toFixed(0));
      if (progress === 100) {
        localStorage.setItem('uploaded', 'true');
      }

      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        default:
          console.log('unknown error');
      }
    }, (error) => {
      // Handle unsuccessful uploads
    }
  );

  const getImgUrl = async () => {
    // get download url from storage after upload
    let downloadURL;
    if (progress === 100) {
      setTimeout(() => {
        downloadURL = getDownloadURL(storageRef);
      console.log(downloadURL);
      }, 10000)
    }
    //return downloadURL;
    return downloadURL;
    
  }


  return imgUrl = await getImgUrl();
}
