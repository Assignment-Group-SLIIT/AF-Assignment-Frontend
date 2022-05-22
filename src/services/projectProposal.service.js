import axios from "axios";
import { PORT } from "../config/globals";

export const createProjectProposal = async (payload) => {
    try {
        const res = await axios.post(`${PORT}/projectproposals`, employeePayload);
        if (res.status === 201)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}

export const getAllProjectProposal = async () => {
    try {
        const res = await axios.get(`${PORT}/projectproposals`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}

export const updateProjectProposal = async (id, payload) => {
    try {
        const res = await axios.put(`${PORT}/projectproposals/${id}`, payload);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}

export const deleteProjectProposal = async (id) => {
    try {
        const res = await axios.delete(`${PORT}/projectproposals/${id}`);
        if (res.status === 200)
            return { ok: true };
    } catch (error) {
        return { ok: false, err: error.response.data.status };
    }
}