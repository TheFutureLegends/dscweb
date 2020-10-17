import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const useBreakpoint = () => {
	const [brkPnt, setBrkPnt] = useState(() => window.innerWidth);

	useEffect(() => {
		const calcInnerWidth = throttle(function () {
			setBrkPnt(window.innerWidth);
		}, 200);
		window.addEventListener("resize", calcInnerWidth);
		return () => window.removeEventListener("resize", calcInnerWidth);
	}, []);

	return brkPnt;
};
export default useBreakpoint;
