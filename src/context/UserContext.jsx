import { createContext, useContext, useEffect, useState } from "react";
import { UserService } from "../apiservices/UserServices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Inicialize como null ou {}

    const handleUser = async () => {
        try {
            const response = await UserService.getUser(1);
            if (response.status === 200) {
                setUser(response.data.user);
            }
        } catch (error) {
            // Trate o erro aqui (por exemplo, exibindo uma mensagem de erro)
            console.error("Error fetching user:", error);
        }
    };

    const updateUser = (userData) => {
        setUser(userData);
    };

    useEffect(() => {
        handleUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
