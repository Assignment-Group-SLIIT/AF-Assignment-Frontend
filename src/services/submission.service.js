import API from "./API";

export const addSubmission = async (payload) => {
    try {
        const res = await API.post(`submissions`, payload);
        if (res.status === 201)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getAllSubmissions = async () => {
    try {
        const res = await API.get(`submissions`);
        if (res.status === 200)
            return { ok: true, data: res.data };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const updateSubmission = async (id, payload) => {
    try {
        const res = await API.put(`submissions/${id}`, payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const deleteSubmission = async (id) => {
    try {
        const res = await API.delete(`submissions/${id}`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const GetSubmissionType = async (type) => {
    try {
        const res = await API.post(`submissions/${type}`);
        if (res.status === 200)
            return { ok: true, data: res.data };
    } catch (error) {
        return { ok: false, err: error };
    }
}