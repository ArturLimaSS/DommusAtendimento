import { createContext, useContext, useState, useEffect } from "react";
import { TicketService } from "../apiservices/TicketServices";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [ticket, setTicket] = useState([]);

    const handleTicket = async (id) => {
        const response = await TicketService.index(id);
        if (response) {
            setTicket(response.data.ticket)
        }
    }

    return (
        <TicketContext.Provider value={{ticket, handleTicket}}>
            {children}
        </TicketContext.Provider>
    )
}

export const useTicket = () => {
    return useContext(TicketContext)
}