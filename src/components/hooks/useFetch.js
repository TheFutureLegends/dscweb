import React, { useContext } from "react";
import axios from "axios";
import { UtilityContext } from "../../contexts/UtilityContext";

export const useFetch = (url) => {
	const [response, setResponse] = React.useState(null);
	const [error, setError] = React.useState(null);
	const { apiDomain } = useContext(UtilityContext);
	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`${apiDomain}${url}`);
				setResponse(res);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, [url, apiDomain]);
	return { response, error };
};
