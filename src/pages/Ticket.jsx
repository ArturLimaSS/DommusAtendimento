import { useParams } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import { useEffect } from "react";

export const TicketPage = () => {
    const { id } = useParams();
    const { ticket, handleTicket } = useTicket();

    useEffect(() => {
        // Verifica se o 'ticket' ainda não tem dados para evitar fazer várias requisições
        if (!ticket || Object.keys(ticket).length === 0) {
            handleTicket(id);
        }
    }, [handleTicket, id, ticket]); // Certifique-se de incluir 'handleTicket', 'id' e 'ticket' como dependências do useEffect

    // Renderiza uma mensagem de carregamento enquanto os dados estão sendo buscados
    if (!ticket || Object.keys(ticket).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Ticket ID: {ticket.id}</h2>
            <span>{ticket.description}</span>
        </div>
    );
};
