import API from "./API";

export const addAssignment = async (payload) => {
    try {
        const res = await API.post(`assignments`, payload);
        if (res.status === 201)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getAllAssignement = async () => {
    try {
        console.log("get all");
        const res = await API.get(`assignments`);
        if (res.status === 200)
            return { ok: true, data: res.data };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const updateAssignment = async (id, payload) => {
    try {
        const res = await API.put(`assignments/${id}`, payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const deleteAssignment = async (id) => {
    try {
        const res = await API.delete(`assignments/${id}`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}