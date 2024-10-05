import styles from "./DefaultButton.module.scss";
import { CSSProperties, FC } from "react";

type TVariantButton = "default" | "brand";
type TRadiusButton = "circle" | "square";

interface DefaultButtonProps {
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: JSX.Element;
	text?: string;
	variant?: TVariantButton;
	radius?: TRadiusButton;
	style?: CSSProperties;
	onClick?: () => void;
}

const DefaultButton: FC<DefaultButtonProps> = ({
	className,
	type = "button",
	icon,
	text,
	variant = "default",
	radius = "circle",
	style,
	onClick,
}) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[variant]} ${styles[radius]} ${className}`}
			style={style}
			onClick={onClick}
		>
			{icon ? icon : text ? text : ""}
		</button>
	);
};

export default DefaultButton;
