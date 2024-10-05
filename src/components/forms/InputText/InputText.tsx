import styles from "./InputText.module.scss";
import { FC } from "react";

interface InputTextProps {
	label?: string;
	placeholder?: string;
}

const InputText: FC<InputTextProps> = ({ label, placeholder }) => {
	return (
		<div className={`${styles.wrapper}`}>
			<label>{label}</label>
			<input placeholder={placeholder} />
		</div>
	);
};

export default InputText;
