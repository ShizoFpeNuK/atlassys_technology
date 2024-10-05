import styles from "./MenuSidebar.module.scss";
import { FC, useState } from "react";
import { ReactComponent as IconLogo } from "../../assets/logo/logo.svg";
import { ReactComponent as IconHome } from "../../assets/icons/home.svg";
import { ReactComponent as IconTransfer } from "../../assets/icons/transfer.svg";
import { ReactComponent as IconAccount } from "../../assets/icons/account.svg";
import { ReactComponent as IconInvestments } from "../../assets/icons/economic-investment.svg";
import { ReactComponent as IconCreditCard } from "../../assets/icons/credit-card.svg";
import { ReactComponent as IconLoan } from "../../assets/icons/loan.svg";
import { ReactComponent as IconService } from "../../assets/icons/service.svg";
import { ReactComponent as IconEconom } from "../../assets/icons/econometrics.svg";
import { ReactComponent as IconSetting } from "../../assets/icons/settings-fill.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { GLOBAL_MEDIA } from "../../utils/globalMedia";

type TListItems = {
	icon: JSX.Element;
	label: string;
};

const listItems: TListItems[] = [
	{
		icon: <IconHome />,
		label: "Dashboard",
	},
	{
		icon: <IconTransfer />,
		label: "Transactions",
	},
	{
		icon: <IconAccount />,
		label: "Accounts",
	},
	{
		icon: <IconInvestments />,
		label: "Investments",
	},
	{
		icon: <IconCreditCard />,
		label: "Credit Cards",
	},
	{
		icon: <IconLoan />,
		label: "Loans",
	},
	{
		icon: <IconService />,
		label: "Services",
	},
	{
		icon: <IconEconom />,
		label: "My Privileges",
	},
	{
		icon: <IconSetting />,
		label: "Setting",
	},
];

interface MenuSidebarProps {
	isPortal?: boolean;
	onClose?: () => void;
}

const MenuSidebar: FC<MenuSidebarProps> = ({ isPortal, onClose }) => {
	const isMobileTablet = useMediaQuery(GLOBAL_MEDIA.mobileTablet);
	const [activeBtn, setActiveBtn] = useState<number | null>(listItems.length - 1);

	const handleClick = (i: number) => {
		setActiveBtn(i);
		onClose?.();
	};

	if (isMobileTablet && !isPortal) return null;

	return (
		<aside
			className={`${styles.aside}`}
			style={{ ...(isPortal ? { overflowX: "auto" } : {}) }}
		>
			<span className={`${styles.logo}`}>
				<IconLogo />
			</span>
			<div className={`${styles.list}`}>
				{listItems.map(({ icon, label }, i) => (
					<div
						key={label}
						className={`${styles.item} ${activeBtn === i ? styles.active : {}}`}
						onClick={() => handleClick(i)}
					>
						<span className={`${styles.icon}`}>{icon}</span>
						<span className={`${styles.label}`}>{label}</span>
					</div>
				))}
			</div>
		</aside>
	);
};

export default MenuSidebar;
