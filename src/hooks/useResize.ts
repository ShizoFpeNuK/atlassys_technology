import { useState, useEffect } from "react";

const useResize = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.screen.width);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return screenWidth;
};

export default useResize;
