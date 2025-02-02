import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo, useState } from "react";
import { isEmpty } from "lodash";

enum THEME {
    light = "light",
    dark = "dark"
}

type ThemeContextType = {
    theme: keyof typeof THEME;
    toggleTheme: Dispatch<SetStateAction<void>>;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: THEME.light, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const cachedTheme = localStorage.getItem("theme");
    
    const [theme, setTheme] = useState(THEME.light);

    const toggleTheme = useCallback(() => {
        setTheme(theme === THEME.light ? THEME.dark : THEME.light);

        // save the value to local storage
    }, []);

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