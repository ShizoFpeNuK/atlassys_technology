import { FC } from "react";
import styles from "./PAContent.module.scss";
import DefaultTabs from "../../../../components/tabs/DefaultTabs/DefaultTabs";
import EditAvatar from "../EditAvatar/EditAvatar";
import EditForm from "../EditForm/EditForm";

const tabs = ["Edit Profile", "Preferences", "Security"];

const PAContent: FC = () => {
	return (
		<main className={`${styles.main}`}>
			<DefaultTabs tabs={tabs} />
			<div className={`${styles.container}`}>
				<EditAvatar style={{ marginTop: "3px" }} />
				<EditForm />
			</div>
		</main>
	);
};

export default PAContent;
