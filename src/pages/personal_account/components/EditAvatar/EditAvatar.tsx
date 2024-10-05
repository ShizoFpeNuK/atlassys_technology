import styles from "./EditAvatar.module.scss";
import InputFile from "../../../../components/forms/InputFile/InputFile";
import DefaultButton from "../../../../components/buttons/DefaultButton/DefaultButton";
import { checkIsImage, globalImageTypes } from "../../../../utils/utils";
import { ChangeEventHandler, FC, useRef, useState } from "react";
import { ReactComponent as IconPencil } from "../../../../assets/icons/pencil.svg";

const EditAvatar: FC = () => {
	const [file, setFile] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleClickButton = () => {
		if (inputRef.current) inputRef.current.click();
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const newFile = e.target.files?.[0];
		if (newFile) {
			if (!checkIsImage(newFile.name)) return;

			setFile(URL.createObjectURL(newFile));
		}
	};

	return (
		<div className={`${styles.wrapper}`}>
			<div className={`${styles.avatar}`}>
				<img
					src={file || "/assets/avatar-130.png"}
					alt="avatar"
				/>
			</div>
			<DefaultButton
				className={`${styles.button}`}
				size="30.1px"
				variant="brand"
				icon={<IconPencil />}
				onClick={handleClickButton}
			/>
			<InputFile
				ref={inputRef}
				accept={globalImageTypes}
				onChange={handleChange}
			/>
		</div>
	);
};

export default EditAvatar;
