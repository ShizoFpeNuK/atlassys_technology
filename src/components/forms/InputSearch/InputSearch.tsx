import styles from "./InputSearch.module.scss";
import { FC } from "react";
import { ReactComponent as IconSearch } from "../../../assets/icons/search.svg";

interface InputSearchProps {
	className?: string;
	onChange?: () => void;
}

const InputSearch: FC<InputSearchProps> = ({ className, onChange }) => {
	return (
		<div className={`${styles.wrapper} ${className}`}>
			<IconSearch className={`${styles.icon}`} />
			<input
				className={`${styles.search}`}
				placeholder="Search for something"
				onChange={onChange}
			/>
		</div>
	);
};

export default InputSearch;
