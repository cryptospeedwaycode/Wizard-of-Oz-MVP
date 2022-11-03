import axios from "axios";
import { ADD_PREFIX, WALLET_PREFIX, PUBLIC_PREFIX, BACKEND_API_PREFIX, GET_PREFIX } from "../configs/public.config";

export const addMetamaskAddress = async (params: any) => {
	const result = await axios.post(
		BACKEND_API_PREFIX + PUBLIC_PREFIX + WALLET_PREFIX + ADD_PREFIX,
		params
	);
	if (result.status === 200) {
		return result;
	}
};

export const getAddress = async () => {
	const result = await axios.post(
		BACKEND_API_PREFIX + PUBLIC_PREFIX + WALLET_PREFIX + GET_PREFIX
	);
	if (result.status === 200) {
		return result.data;
	}
};
