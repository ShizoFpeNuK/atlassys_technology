import styles from "./InputSearch.module.scss";
import { FC } from "react";
import { ReactComponent as IconSearch } from "../../../assets/icons/search.svg";

interface InputSearchProps {
	onChange?: () => void;
}

const InputSearch: FC<InputSearchProps> = ({ onChange }) => {
	return (
		<div className={`${styles.wrapper}`}>
			<IconSearch />
			<input
				className={`${styles.search}`}
				placeholder="Search for something"
				onChange={onChange}
			/>
		</div>
	);
};

export default InputSearch;
