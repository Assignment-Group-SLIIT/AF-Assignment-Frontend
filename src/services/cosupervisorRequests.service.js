import API from "./API";

export const createRequestTopicsCoSupervisors = async(payload) => {
    try{
        const response = await API.post(`requestTopicsCoSupervisors` , payload);
        if(response.status === 201)
            return {ok: true};
    }catch(message) {
        return {ok: false, error:message}
    }
}

export const getAllRequestTopicsCoSupervisors = async() => {
    try {
        const response = await API.get(`requestTopicsCoSupervisors`);
        if(response.status === 200)
            return {ok:true , data: response.data};
    }catch(message) {
        return {ok: false, error:message}
    }
}

export const updateRequestTopicsCoSupervisors = async (id, payload) => {
    try {
        const response = await API.put(`requestTopicsCoSupervisors/${id}`, payload);
            if(response.status === 200)
                return {ok: true};
    }catch(message) {
        return {ok: false , error: message};
    }
}

export const deleteRequestTopicsCoSupervisors = async (id) => {
    try{
        const response = await API.delete(`requestTopicsCoSupervisors/${id}`);
        if(response.status === 204){
            return {ok:true};
        }
    }catch(message){
        return {ok:false, error: message};
    }
}

export const getOneRequestTopicsCoSupervisors = async(id) => {
    try{
        const response = await API.get(`requestTopicsCoSupervisors/${id}`);
        if(response.status === 200){
            return {ok:true};
        }
    }catch(message){
        return {ok:false, error: message};
    }
}

export const getAllRequestTopicsCoSupervisorsByName = async(name) => {
    try{
        const response = await API.get(`requestTopicsCoSupervisors/${name}`);
        if(response.status === 200){
            return {ok:true};
        }
    }catch(message){
        return {ok:false, error: message};
    }
}
