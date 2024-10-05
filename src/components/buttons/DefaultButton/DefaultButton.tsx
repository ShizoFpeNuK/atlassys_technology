import styles from "./DefaultButton.module.scss";
import { FC } from "react";

type TVariantButton = "default" | "brand";

interface DefaultButtonProps {
	className?: string;
	icon?: JSX.Element;
	size?: string;
	variant?: TVariantButton;
	onClick?: () => void;
}

const DefaultButton: FC<DefaultButtonProps> = ({
	className,
	icon,
	size = "50.1px",
	variant = "default",
	onClick,
}) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${className}`}
			style={{ ...(icon ? { width: size, height: size } : {}) }}
			onClick={onClick}
		>
			{icon}
		</button>
	);
};

export default DefaultButton;
