import styles from "./InputDate.module.scss";
import { FC, FocusEventHandler, useEffect, useRef, useState } from "react";
import { ReactComponent as IconArrow } from "../../../assets/icons/arrow.svg";

interface InputDateProps {
	name?: string;
	label?: string;
	placeholder?: string;
	onChange?: () => void;
}

const InputDate: FC<InputDateProps> = ({ name, label, placeholder, onChange }) => {
	const [inputType, setInputType] = useState<string>("text");
	const [isClickBtn, setIsClickBtn] = useState<boolean>(true);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleClickIcon = () => {
		setIsClickBtn(true);
		setInputType("date");
	};

	const handleFocus = () => {
		setIsClickBtn(false);
		setInputType("date");
	};

	const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
		setIsClickBtn(false);
		if (!e.target.value) setInputType("text");
	};

	useEffect(() => {
		if (isClickBtn && inputType === "date" && inputRef.current) {
			inputRef.current.focus();
			inputRef.current.click();
			inputRef.current.showPicker();
		}
	}, [inputType, isClickBtn]);

	return (
		<div className={`${styles.wrapper}`}>
			<label>{label}</label>
			<div className={`${styles.input}`}>
				<input
					ref={inputRef}
					type={inputType}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<span className={`${styles.icon}`}>
					<IconArrow onClick={handleClickIcon} />
				</span>
			</div>
		</div>
	);
};

export default InputDate;
