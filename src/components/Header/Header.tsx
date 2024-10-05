import DefaultButton from "../buttons/DefaultButton/DefaultButton";
import styles from "./Header.module.scss";
import { FC } from "react";
import { ReactComponent as IconNotification } from "../../assets/icons/notification.svg";
import { ReactComponent as IconSetting } from "../../assets/icons/settings-stroke.svg";
import InputSearch from "../forms/InputSearch/InputSearch";

const Header: FC = () => {
	return (
		<header className={`${styles.header}`}>
			<h1 className={`${styles.title}`}>Setting</h1>
			<div className={`${styles.container_right}`}>
				<div className={`${styles.container}`}>
          <InputSearch />
					<DefaultButton icon={<IconSetting />} />
					<DefaultButton icon={<IconNotification />} />
				</div>
				<img
					src="/assets/avatar-60.png"
					alt="avatar"
				/>
			</div>
		</header>
	);
};

export default Header;
