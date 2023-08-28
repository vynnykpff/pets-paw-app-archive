import React, {FC} from "react";
import styles from "./Upload.module.scss"
import {useRouter} from "next/router";
import UploadTitle from "@/components/Upload/UploadTitle";
import UploadImage from "@/components/Upload/UploadImage";

const UploadComponent : FC = () => {

  const router = useRouter()

  return <div className={styles.modal}>
    <div className={styles.modalContent}>
      <button onClick={() => router.back()} className={styles.closeModal}>
        <span>X</span>
      </button>
      <UploadTitle />
      <UploadImage />
    </div>
  </div>;
}

export default UploadComponent;