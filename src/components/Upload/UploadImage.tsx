import React, {FC, useState} from "react";
import styles from "./Upload.module.scss"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/common/firebase-config";
import axios from "axios";

const UploadImage : FC = () => {
  const [user] = useAuthState(auth)

  const [image, setImage] = useState(null);
  const [result, setResult] = useState([]);

  const handleChange = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log("worked")
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('sub_id', user.uid)

    await axios.post('https://api.thecatapi.com/v1/images/upload', formData, {
      headers : {
        "x-api-key" : process.env.NEXT_PUBLIC_CAT_API
      }
    }).then(res => setResult(prev => ([...prev, res.data])))
  }

  return <div className={styles.imageContainer}>
    <input id="uploadImg" type="file" accept={"image/*"} style={{opacity : 0}} onChange={handleChange} />
    <label htmlFor="uploadImg">
      <div className={styles.image}>
        {image ? (
          <div >
            <img className={styles.imageInner} src={image} alt="" />
          </div>
        ) : (
          <h2>Drag here your file or Click here to upload</h2>
        )}
      </div>
    </label>
    <div className={styles.resultContainer}>
      {result.length !== 0 && (<div className={styles.result}>
        <p>Thanks for the Upload - Cat found!</p>
      </div>)}
    </div>
  </div>;
}

export default UploadImage;