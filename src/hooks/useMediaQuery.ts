import { GLOBAL_MEDIA } from "../utils/globalMedia";
import { useEffect, useState } from "react";
import useResize from "./useResize";

const useMediaQuery = (maxWidth: number = GLOBAL_MEDIA.mobile) => {
	const width = useResize();
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		if (maxWidth >= width) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width, maxWidth]);

	return isMobile;
};

export default useMediaQuery;
