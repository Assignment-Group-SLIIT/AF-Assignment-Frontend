import API from "./API";

export const createTemplate = async (payload) => {
    try {
        const res = await API.post(`templates`, payload);
        if (res.status === 201)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getAllTemplate = async () => {
    try {
        const res = await API.get(`templates`);
        if (res.status === 200)
            return { ok: true, data: res.data };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const updateTemplate = async (id, payload) => {
    try {
        const res = await API.put(`templates/${id}`, payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const deleteTemplate = async (id) => {
    try {
        const res = await API.delete(`templates/${id}`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}