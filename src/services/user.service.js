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
            error: message
        }
    }

}

