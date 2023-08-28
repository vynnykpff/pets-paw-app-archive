import React, {FC} from "react";
import styles from "./Upload.module.scss"

const UploadTitle : FC = () => {

  return <div className={styles.titleContainer}>
    <h1>Upload a .jpg or .png Cat Image</h1>
    <p>
      Any uploads must comply with the <span>upload guidelines</span> or face deletion.
    </p>
  </div>;
}

export default UploadTitle;