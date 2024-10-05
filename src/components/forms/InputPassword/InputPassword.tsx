import styles from "./InputPassword.module.scss";
import { FC, useState } from "react";

interface InputPasswordProps {
	name?: string;
	label?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
}

const InputPassword: FC<InputPasswordProps> = ({ name, label, placeholder, onChange }) => {
	const [inputValue, setInputValue] = useState("");
	const [maskedValue, setMaskedValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
		onChange?.(value);

		if (value.length > inputValue.length) {
			setMaskedValue(maskedValue + "*");
		} else {
			setMaskedValue(value);
		}
	};

	return (
		<div className={`${styles.wrapper}`}>
			<label>{label}</label>
			<input
				name={name}
				value={maskedValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputPassword;
