import { Api } from "../constants/Api"

export const KanbanService = {
    show: () => {
        return Api.get('/kanban/1')
    }
}