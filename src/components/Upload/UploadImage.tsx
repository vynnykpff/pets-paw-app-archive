import { auth } from "@/common/firebase-config";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Upload.module.scss";

interface CatImageData {
  id: string;
  url: string;
}

const UploadImage: FC = () => {
  const [user] = useAuthState(auth);
  const [showModalError, setShowModalError] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<CatImageData[]>([]);

  // TODO: bring out logic with API to redux
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("sub_id", String(user?.uid));

      try {
        const response = await axios.post("https://api.thecatapi.com/v1/images/upload", formData, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_CAT_API,
          },
        });
        const catData: CatImageData = response.data;
        setResult(prev => [...prev, catData]);
        setShowModalError(false);
      } catch (error) {
        setShowModalError(true);
      }
    }
  };

  return (
    <div className={styles.imageContainer}>
      <input id="uploadImg" type="file" accept="image/*" style={{ opacity: 0 }} onChange={handleChange} />
      <label htmlFor="uploadImg">
        <div className={styles.image}>
          {image ? (
            <div>
              <Image width={100} height={100} className={styles.imageInner} src={image} alt="user image" />
            </div>
          ) : (
            <h2>Drag here your file or Click here to upload</h2>
          )}
        </div>
      </label>
      <div className={styles.resultContainer}>
        {result.length !== 0 && (
          <div className={styles.result}>
            <p>Thanks for the Upload - Cat found!</p>
          </div>
        )}
      </div>
      {showModalError && <ModalNotification title="Error uploading image" typeNotification="error" />}
    </div>
  );
};

export default UploadImage;
