import API from "./API";

export const createProjectProposal = async (payload) => {
    try {
        const res = await API.post(`projectproposals`, payload);
        if (res.status === 201)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const getAllProjectProposal = async () => {
    try {
        const res = await API.get(`projectproposals`);
        if (res.status === 200)
            return { ok: true, data: res.data };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const updateProjectProposal = async (id, payload) => {
    try {
        const res = await API.put(`projectproposals/${id}`, payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}

export const deleteProjectProposal = async (id) => {
    try {
        const res = await API.delete(`projectproposals/${id}`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error };
    }
}