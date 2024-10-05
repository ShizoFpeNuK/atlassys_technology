import { FC, useEffect } from "react";
import styles from "./MenuSidebarPortal.module.scss";
import CreatePortal from "../../portals/CreatePortal";
import MenuSidebar from "../MenuSidebar";

interface MenuSidebarPortalProps {
	isOpen: boolean;
	onClose: () => void;
}

const MenuSidebarPortal: FC<MenuSidebarPortalProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<CreatePortal
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className={`${styles.modal}`}>
				<MenuSidebar
					isPortal
					onClose={onClose}
				/>
			</div>
		</CreatePortal>
	);
};

export default MenuSidebarPortal;
