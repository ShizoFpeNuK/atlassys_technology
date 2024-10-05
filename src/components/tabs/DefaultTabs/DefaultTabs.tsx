import styles from "./DefaultTabs.module.scss";
import { FC } from "react";

interface DefaultTabsProps {
	tabs: string[];
	onSelect?: () => void;
}

const DefaultTabs: FC<DefaultTabsProps> = ({ tabs, onSelect }) => {
	return (
		<div className={`${styles.container}`}>
			{tabs.map((tab) => (
				<div
					className={`${styles.tab}`}
					onClick={onSelect}
				>
					<span>{tab}</span>
				</div>
			))}
		</div>
	);
};

export default DefaultTabs;
