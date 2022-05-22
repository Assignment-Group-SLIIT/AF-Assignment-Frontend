import API from "./API";

export const addSubmission = async (payload) => {
    try {
        const res = await axios.post(`${PORT}/submissions`, employeePayload);
        if (res.status === 201)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}

export const getAllSubmissions = async () => {
    try {
        const res = await axios.get(`${PORT}/submissions`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}

export const updateSubmission = async (id, payload) => {
    try {
        const res = await axios.put(`${PORT}/submissions/${id}`, payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}

export const deleteSubmission = async (id) => {
    try {
        const res = await axios.delete(`${PORT}/submissions/${id}`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}