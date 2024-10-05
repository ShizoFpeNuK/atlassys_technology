import DefaultButton from "../buttons/DefaultButton/DefaultButton";
import styles from "./Header.module.scss";
import { FC, useState } from "react";
import { GLOBAL_MEDIA } from "../../utils/globalMedia";
import { ReactComponent as IconBurger } from "../../assets/icons/burger.svg";
import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";
import { ReactComponent as IconSetting } from "../../assets/icons/settings-stroke.svg";
import { ReactComponent as IconNotification } from "../../assets/icons/notification.svg";
import InputSearch from "../forms/InputSearch/InputSearch";
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuSidebarPortal from "../MenuSidebar/MenuSidebarPortal/MenuSidebarPortal";

const Header: FC = () => {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const isMobile = useMediaQuery();
	const isTablet = useMediaQuery(GLOBAL_MEDIA.tablet);
	const isMobileTablet = useMediaQuery(GLOBAL_MEDIA.mobileTablet);

	const handleClickMenu = () => setIsOpenMenu(true);

	return (
		<>
			<header className={`${styles.header}`}>
				<div className={`${styles.wrapper}`}>
					{isMobileTablet && (
						<button
							className={`${styles.burger}`}
							onClick={handleClickMenu}
						>
							<IconBurger />
						</button>
					)}
					<h1 className={`${styles.title}`}>Setting</h1>
					<div className={`${styles.right}`}>
						<div className={`${styles.container}`}>
							{!isMobile && (
								<>
									{isTablet ? (
										<DefaultButton
											icon={
												<IconSearch
													width="25px"
													height="25px"
												/>
											}
										/>
									) : (
										<InputSearch className={`${styles.search}`} />
									)}
									<DefaultButton icon={<IconSetting />} />
									<DefaultButton icon={<IconNotification />} />
								</>
							)}
						</div>
						<div className={`${styles.image_wrapper}`}>
							<img
								src={isMobile ? "/assets/avatar-35.png" : "/assets/avatar-60.png"}
								alt="avatar"
							/>
						</div>
					</div>
				</div>
				{isMobile && <InputSearch />}
			</header>
			<MenuSidebarPortal
				isOpen={isOpenMenu}
				onClose={() => setIsOpenMenu(false)}
			/>
		</>
	);
};

export default Header;
