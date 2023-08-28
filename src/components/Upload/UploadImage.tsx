import {auth} from "@/common/firebase-config";
import axios from "axios";
import React, {ChangeEvent, FC, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import styles from "./Upload.module.scss";

const UploadImage: FC = () => {
	const [user] = useAuthState(auth);

	const [image, setImage] = useState<string | null>(null); // Укажите тип для image
	const [result, setResult] = useState<any[]>([]); // Укажите более точный тип для result

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setImage(URL.createObjectURL(selectedFile));
			console.log("worked");
			const formData = new FormData();
			formData.append("file", selectedFile);
			formData.append("sub_id", String(user?.uid));

			try {
				const response = await axios.post(
					"https://api.thecatapi.com/v1/images/upload",
					formData,
					{
						headers: {
							"x-api-key": process.env.NEXT_PUBLIC_CAT_API,
						},
					}
				);
				setResult((prev) => [...prev, response.data]);
			} catch (error) {
				console.error("Error uploading image:", error);
			}
		}
	};

	return (
		<div className={styles.imageContainer}>
			<input
				id="uploadImg"
				type="file"
				accept="image/*"
				style={{opacity: 0}}
				onChange={handleChange}
			/>
			<label htmlFor="uploadImg">
				<div className={styles.image}>
					{image ? (
						<div>
							<img className={styles.imageInner} src={image} alt=""/>
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
		</div>
	);
};

export default UploadImage;
