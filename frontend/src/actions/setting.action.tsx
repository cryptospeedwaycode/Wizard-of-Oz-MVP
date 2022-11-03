import axios from "axios";
import { SETTING_PREFIX, PUBLIC_PREFIX, BACKEND_API_PREFIX, GET_PREFIX } from "../configs/public.config";

export const getSettings = async () => {
	const result = await axios.get(
		BACKEND_API_PREFIX + PUBLIC_PREFIX + SETTING_PREFIX + GET_PREFIX
	);
	if (result.status === 200) {
		return result.data;
	}
};
