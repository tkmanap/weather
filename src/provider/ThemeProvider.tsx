import {ReactNode, useState} from 'react';
import {Theme, ThemeContext} from "../context/ThemeContext.ts";
import {changeCssRootVariables} from "../model/ChangeCssRootVariables.ts";
import {storage} from "../model/Storage.ts";

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(
        storage.getItem('theme') || Theme.DARK
    )
    changeCssRootVariables(theme)
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme)
        setTheme(theme)
        changeCssRootVariables(theme)
    }

    return (
        <ThemeContext.Provider
            value={{theme, changeTheme}}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;