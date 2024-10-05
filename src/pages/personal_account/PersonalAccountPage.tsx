import styles from "./PersonalAccountPage.module.scss";
import Header from "../../components/Header/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import PAContent from "./components/PAContent/PAContent";

const PersonalAccountPage = () => {
	return (
		<div className={`${styles.grid}`}>
			<MenuSidebar />
			<Header />
			<PAContent />
		</div>
	);
};

export default PersonalAccountPage;
