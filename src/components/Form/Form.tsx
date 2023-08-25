import { AuthScheme } from "@/schemes/AuthScheme";
import { IUserCredentials } from "@/types/UserCredentials";
import cn from "classnames";
import { Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Form.module.scss";

import PasswordIcon from "@/assets/icons/password.svg";
import EmailIcon from "@/assets/icons/email.svg";
import GoogleIcon from "@/assets/icons/google.svg";

interface IFormProps {
	title: string;
	route: string;
	description: string;
	authText: string;

	handleGoogleLogin(): void;

	handleClick(userData: IUserCredentials): void;
}

interface IValues {
	email: string;
	password: string;
}

const Form = ({ title, handleClick, handleGoogleLogin, route, description, authText }: IFormProps) => {
	const [isGoogleLogin, setIsGoogleLogin] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	const handleSubmit = (values: IValues) => {
		isGoogleLogin && handleGoogleLogin();
		!isGoogleLogin && handleClick({ email: values.email, password: values.password });
	};

	return (
		<form onSubmit={e => e.preventDefault()} className={styles.form}>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={AuthScheme}
				onSubmit={handleSubmit}
			>
				{({ handleChange, handleSubmit, values, errors }) => (
					<>
						<p className={styles.formTitle}>{title}</p>
						<div className={styles.flexColumn}>
							<label>Email</label>
						</div>
						<div className={cn(styles.inputForm, isFocus ? styles.activeInput : styles.inputForm)}>
							<PasswordIcon />
							<input
								onFocus={() => setIsFocus(true)}
								onBlur={() => setIsFocus(false)}
								value={values.email}
								onChange={handleChange("email")}
								placeholder="Enter your Email"
								className={styles.input}
								type="text"
							/>
						</div>
						<span className={styles.errorMessage}>{errors.email}</span>
						<div className={styles.flexColumn}>
							<label>Password </label>
						</div>
						<div className={cn(styles.inputForm, isFocus ? styles.activeInput : styles.inputForm)}>
							<EmailIcon />
							<input
								onFocus={() => setIsFocus(true)}
								onBlur={() => setIsFocus(false)}
								placeholder="Enter your Password"
								className={styles.input}
								value={values.password}
								onChange={handleChange("password")}
								type="password"
							/>
						</div>
						<span className={styles.errorMessage}>{errors.password}</span>
						<button
							type="submit"
							onClick={() => {
								setIsGoogleLogin(false);
								handleSubmit();
							}}
							className={styles.buttonSubmit}
						>
							{title}
						</button>
						<p className={styles.p}>
							{description}
							<Link href={route} className={styles.span}>
								{authText}
							</Link>
						</p>
						<p className={cn(styles.p, styles.line)}>Or With</p>
						<div className={styles.flexRow}>
							<button
								type="submit"
								onClick={() => {
									setIsGoogleLogin(true);
									handleSubmit();
								}}
								className={cn(styles.btn, styles.google)}
							>
								<GoogleIcon />
								Google
							</button>
						</div>
					</>
				)}
			</Formik>
		</form>
	);
};

export default Form;
