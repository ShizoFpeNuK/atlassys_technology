import Header from "../components/Header/Header";
import MenuSidebar from "../components/MenuSidebar/MenuSidebar";
import styles from "./RootLayout.module.scss";
import { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={`${styles.grid}`}>
			<MenuSidebar />
			<Header />
			{children}
		</div>
	);
};

export default RootLayout;
