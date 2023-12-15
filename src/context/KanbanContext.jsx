import { createContext, useContext, useState, useEffect } from "react";
import { KanbanService } from "../apiservices/KanbanServices";


const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
    const [kanban, setKanban] = useState([]);
    const [status, setStatus] = useState([]);

    const handleKanban = async () => {
        const response = await KanbanService.show();
        if (response.status === 200) {
            setKanban(response.data.kanban)
            setStatus(response.data.status)
        }
    }

    useEffect(() => {
        handleKanban()
    }, [])

    return (
        <KanbanContext.Provider value={{ kanban, status }}>
            {children}
        </KanbanContext.Provider>

    )

}

export const usekanban = () => {
    return useContext(KanbanContext);
}