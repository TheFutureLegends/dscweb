import { useEffect, useState } from "react";

const useNavScroll = () => {
	const [navStatus, setNavStatus] = useState({
		show: true,
		scrollPos: 0,
	});

	useEffect(() => {
		const handleScroll = () => {
			const BoundingClientRectTop = document.body.getBoundingClientRect().top;
			if (BoundingClientRectTop < -500) {
				setNavStatus({
					scrollPos: BoundingClientRectTop,
					show: BoundingClientRectTop > navStatus.scrollPos,
				});
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [navStatus.scrollPos]);
	return navStatus;
};

export default useNavScroll;
