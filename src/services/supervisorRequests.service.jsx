import API from "./API";

export const createSupervisorRequest = async (supervisorRequest) => {

    try {
        const response = await API.post("supervisors/", supervisorRequest);
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

export const getAllRequests = async () => {
    try {
        const response = await API.get("supervisors/")
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

export const getAllSupervisorRequests = async (name) => {
    try {
        const response = await API.get("supervisors/" + name)
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

export const getOneRequest = async (id) => {
    try {
        const response = await API.get("supervisors/groups/" + id)
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


export const updateSupervisorRequest = async (id, updatePayload) => {
    try {
        const response = await API.put("supervisors/" + id, updatePayload)
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

export const deleteSupervisorRequest = async (id) => {
    try {
        const response = await API.delete("supervisors/" + id)
        if (response.status === 204) {
            return {
                ok: true,
                data: "Successfully deleted a supervisor request"
            }
        }
    } catch (error) {
        return { ok: false, err: message }
    }
}
