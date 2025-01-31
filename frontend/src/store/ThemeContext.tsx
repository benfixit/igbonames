import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo, useState } from "react";

type ThemeContextType = {
    theme: string;
    changeTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: "", changeTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    const changeTheme = useCallback((theme: string) => {
        setTheme(theme);
    }, []);

    const contextValue = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme]);

    // @ts-ignore
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);