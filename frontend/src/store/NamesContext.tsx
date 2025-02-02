import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Name } from "../typings";


type NamesContextType = {
    names: Array<Name>;
}

export const NamesContext = createContext<NamesContextType>({ names: [] });

export const NamesProvider = ({ children }: { children: ReactNode }) => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchNames = async () => {
            console.log("Getting called");
            const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/names`);
            setNames(response.data.names ?? []);
        }

        fetchNames();
    }, []);

    const contextValue = useMemo(() => ({ names }), [names]);

    // @ts-ignore
    return <NamesContext.Provider value={contextValue}>
        {children}
    </NamesContext.Provider>
}

export const useNames = () => useContext<NamesContextType>(NamesContext);