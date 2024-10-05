import { FC } from "react";
import styles from "./PAContent.module.scss";
import DefaultTabs from "../../../../components/tabs/DefaultTabs/DefaultTabs";
import EditAvatar from "../EditAvatar/EditAvatar";
import InputText from "../../../../components/forms/InputText/InputText";

const tabs = ["Edit Profile", "Preferences", "Security"];

const PAContent: FC = () => {
	return (
		<main className={`${styles.main}`}>
			<DefaultTabs tabs={tabs} />
			<div className={`${styles.container}`}>
				<div className={`${styles.container_left}`}>
					<EditAvatar />
				</div>
				<div className={`${styles.container_right}`}>
					<InputText label="Your Name" placeholder="Charlene Reed" />
				</div>
			</div>
		</main>
	);
};

export default PAContent;
