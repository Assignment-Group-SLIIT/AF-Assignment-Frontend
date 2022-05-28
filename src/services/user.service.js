import { setUserSession } from "../utils/token";
import API from "./API";

export const registerUser = async (userPayload) => {

    try {
        const response = await API.post("users/register", userPayload);
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

export const loginUser = async (user) => {

    try {
        const response = await API.post("users/login", user)
        if (response.status === 200) {
            setUserSession(response.data.token, response.data)
            return {
                ok: true,
                data: response.data
            }
        }

    } catch (error) {
        return { ok: false, err: error.message }
    }
}

export const forgetPassword = async (email, newPassword) => {
    try {
        const response = await API.put("users/" + email + "/" + newPassword)
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

export const getAllUsers = async () => {
    try {
        const response = await API.get("users/")
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

export const getOneUser = async (email) => {
    try {
        const response = await API.get("users/" + email)
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

export const updateUser = async (email, updatePayload) => {
    try {
        const response = await API.put("users/" + email, updatePayload)
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


export const searchUser = async (name) => {
    try {
        const response = await API.get("users/name/" + name)
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

export const deleteUser = async (email) => {
    try {
        const response = await API.delete("users/" + email)
        if (response.status === 204) {
            return {
                ok: true,
                data: "Successfully deleted a user"
            }
        }
    } catch (error) {
        return { ok: false, err: error.message }
    }
}


export const updateSupervisor = async (name, supervisor) => {
    try {
        const response = await API.put("users/supervisor/" + name + "/" + supervisor)
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

export const updateCoSupervisor = async (name, cosupervisor) => {
    try {
        const response = await API.put("users/co/supervisor" + name + "/" + cosupervisor)
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
