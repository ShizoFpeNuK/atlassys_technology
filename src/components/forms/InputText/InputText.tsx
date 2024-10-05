import styles from "./InputText.module.scss";
import { FC } from "react";

interface InputTextProps {
	name?: string;
	label?: string;
	placeholder?: string;
	onChange?: () => void;
}

const InputText: FC<InputTextProps> = ({ name, label, placeholder, onChange }) => {
	return (
		<div className={`${styles.wrapper}`}>
			<label>{label}</label>
			<input
				name={name}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputText;
