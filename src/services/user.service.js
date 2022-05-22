import API from "./API";

const BASE_URL = PORT + "/users";

export const registerUser = async (userPayload) => {

    try {
        const response = await API.post("register", userPayload);
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

