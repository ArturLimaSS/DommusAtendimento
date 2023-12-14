import { Api } from "../constants/Api"

export const UserService = {
    getUser: (id) => {
        return Api.get(`user/${id}`)
    }
}