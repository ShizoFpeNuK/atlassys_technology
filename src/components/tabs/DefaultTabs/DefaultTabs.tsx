import styles from "./DefaultTabs.module.scss";
import { FC, useState } from "react";

interface DefaultTabsProps {
	tabs: string[];
}

const DefaultTabs: FC<DefaultTabsProps> = ({ tabs }) => {
	const [activeBtn, setActiveBtn] = useState<number | null>(0);

	const handleClick = (i: number) => setActiveBtn(i);

	return (
		<div className={`${styles.container}`}>
			{tabs.map((tab, i) => (
				<div
					key={tab}
					className={`${styles.tab} ${activeBtn === i ? styles.active : {}}`}
					onClick={() => handleClick(i)}
				>
					<span>{tab}</span>
				</div>
			))}
		</div>
	);
};

export default DefaultTabs;
