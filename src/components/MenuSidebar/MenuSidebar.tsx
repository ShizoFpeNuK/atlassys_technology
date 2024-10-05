import styles from "./MenuSidebar.module.scss";
import { FC } from "react";
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

const MenuSidebar: FC = () => {
	return (
		<aside className={`${styles.aside}`}>
			<span className={`${styles.logo}`}>
				<IconLogo />
			</span>
			<div className={`${styles.list}`}>
				{listItems.map(({ icon, label }) => (
					<div
						key={label}
						className={`${styles.item}`}
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
