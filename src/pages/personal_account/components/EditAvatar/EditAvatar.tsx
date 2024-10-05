import styles from "./EditAvatar.module.scss";
import InputFile from "../../../../components/forms/InputFile/InputFile";
import DefaultButton from "../../../../components/buttons/DefaultButton/DefaultButton";
import { checkIsImage, globalImageTypes } from "../../../../utils/utils";
import { ChangeEventHandler, CSSProperties, FC, useRef, useState } from "react";
import { ReactComponent as IconPencil } from "../../../../assets/icons/pencil.svg";
import useMediaQuery from "../../../../hooks/useMediaQuery";

interface EditAvatarProps {
	style?: CSSProperties;
}

const EditAvatar: FC<EditAvatarProps> = ({ style }) => {
	const isMobile = useMediaQuery();
	const [srcFile, setSrcFile] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const defaultAvatar = isMobile ? "/assets/avatar-170.png" : "/assets/avatar-130.png";

	const handleClickButton = () => {
		if (inputRef.current) inputRef.current.click();
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const newFile = e.target.files?.[0];

		if (newFile) {
			if (!checkIsImage(newFile.name)) return;
			console.log(newFile);

			setSrcFile(URL.createObjectURL(newFile));
		}
	};

	return (
		<div
			className={`${styles.wrapper}`}
			style={style}
		>
			<div className={`${styles.avatar}`}>
				<img
					// src={srcFile || ""}
					src={srcFile || defaultAvatar}
					alt="avatar"
				/>
			</div>
			<DefaultButton
				className={`${styles.button}`}
				variant="brand"
				icon={<IconPencil className={`${styles.icon}`} />}
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
