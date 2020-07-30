import * as axios from "axios";

const instanse = axios.create({
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {
                "API-KEY" : "eb2a02de-1e28-4626-ba4d-274171a9ad6e"
        },

    }
)
export const usersAPI = {
        getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
},
        followUsers(id) {
        return instanse.post(`follow/${id}`)
            .then(response => response.data);
},
        unFollowUsers(id) {
        return instanse.delete(`follow/${id}`)
            .then(response => response.data);
},
        getProfile(userId) {
        return instanse.get(`profile/` + userId)
            .then(response => response.data);
},
        getMyProfile() {
                return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
                    {withCredentials: true})
                    .then(response => response.data);
        },
        getStatus(userId) {
                return instanse.get(`profile/status/` + userId)
                    .then(response => response);
        },
        putStatus(status) {
                return instanse.put(`profile/status/`, {status: status})
                    .then(response => response);
        },
        postLogin(email, password, rememberMe){
                debugger
                return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email: email, password: password, rememberMe: rememberMe },
                    {withCredentials: true})
                    .then(response => response);
        },
        deleteLogin(){
                debugger
                return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`,
                    {withCredentials: true})
                    .then(response => response);
        }

}