import axios from "axios";
import { PORT } from "../globals/globals";

const BASE_URL = PORT + "/users";

export const registerUser = async (userPayload) => {

    try {
        const response = await axios.post(BASE_URL + "/register", userPayload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: message
        }
    }

}

