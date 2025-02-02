import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo, useState } from "react";
import { isEmpty } from "lodash";
import { THEME } from "../typings";

type ThemeContextType = {
    theme: keyof typeof THEME;
    toggleTheme: Dispatch<SetStateAction<void>>;
}

const LOCAL_STORAGE_KEY = "theme";

export const ThemeContext = createContext<ThemeContextType>({ theme: THEME.light, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const item = localStorage.getItem(LOCAL_STORAGE_KEY);
    const cachedTheme = item ? JSON.parse(item) : THEME.light;
    const [theme, setTheme] = useState(cachedTheme);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === THEME.light ? THEME.dark : THEME.light;
        setTheme(newTheme);

        // save the value to local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTheme));
    }, [theme, setTheme]);

    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    // @ts-ignore
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext<ThemeContextType>(ThemeContext);

    if (isEmpty(context)) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};