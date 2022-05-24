import API from "./API";

export const createPanel = async (userPayload) => {

    try {
        const response = await API.post("panels/", userPayload);
        if (response.status === 201) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return { ok: false, err: error.message }
    }

}