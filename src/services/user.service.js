import { setUserSession } from "../utils/token";
import API from "./API";

export const registerUser = async (userPayload) => {

    try {
        const response = await API.post("users/register", userPayload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error.message
        }
    }

}

export const signin = async (userPayload) => {

    try {
        const response = await API.post("users/login", userPayload);
        if (response.status === 200) {
            setUserSession(response.data.token, response.data)
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return {
            ok: false,
            error: error.message
        }
    }

}

