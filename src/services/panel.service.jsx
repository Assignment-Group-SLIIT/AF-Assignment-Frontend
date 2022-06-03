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

export const getAllPanels = async () => {

    try {
        const response = await API.get("panels/");
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return { ok: false, err: error.message }
    }

}

export const deletePanel = async (id) => {
    try {
        const response = await API.delete("panels/" + id)
        if (response.status === 204) {
            return {
                ok: true,
                data: "Successfully deleted a panel"
            }
        }
    } catch (error) {
        return { ok: false, err: error.message }
    }
}

export const updatePanel = async (panelId, updatePayload) => {
    try {
        const response = await API.put("panels/" + panelId, updatePayload)
        if (response.status === 200) {
            return {
                ok: true,
                data: response.data
            }
        }
    } catch (error) {
        return { ok: false, err: error.message }
    }
}

