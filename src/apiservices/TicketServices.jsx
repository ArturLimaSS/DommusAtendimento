import { Api } from "../constants/Api"

export const TicketService = {
    show: () => {
        return Api.get('/ticket')
    },
    index: () => {
        return Api.get(`/ticket/${id}`)
    }
}