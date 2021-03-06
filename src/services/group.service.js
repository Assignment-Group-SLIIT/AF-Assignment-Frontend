import API from "./API";

export const createGroup = async (payload) => {
    try {
        const response = await API.post(`groups`, payload);
        if (response.status === 201)
            return { ok: true };
    } catch (message) {
        return { ok: false, error: message }
    }
}

export const getAllGroup = async () => {
    try {
        const response = await API.get(`groups`);
        if (response.status === 200)
            return { ok: true, data: response.data };
    } catch (message) {
        return { ok: false, error: message }
    }
}

export const updateGroup = async (id, payload) => {
    try {
        const response = await API.put(`groups/${id}`, payload);
        if (response.status === 200)
            return { ok: true };
    } catch (message) {
        return { ok: false, error: message };
    }
}

export const deleteGroup = async (id) => {
    try {
        const response = await API.delete(`groups/${id}`);
        if (response.status === 200) {
            return { ok: true };
        }
    } catch (message) {
        return { ok: false, error: message };
    }
}

export const getOneGroup = async (id) => {
    try {
        const response = await API.get(`groups/${id}`);
        if (response.status === 200) {
            return { ok: true, data: response.data };
        }
    } catch (message) {
        return { ok: false, error: message };
    }
}

export const sendAcceptRejectEmail = async (payload) => {
    // console.log("SENDS EMAIL CALLED", payload)
    try {
        const res = await API.post("groups/email/", payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}