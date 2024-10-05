import styles from "./InputFile.module.scss";
import { forwardRef, InputHTMLAttributes } from "react";

const InputFile = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, "type">>(
	(props, ref) => {
		return (
			<input
				ref={ref}
				{...props}
				type="file"
				className={`${styles.input_file}`}
			/>
		);
	},
);
InputFile.displayName = "InputFile";

export default InputFile;
