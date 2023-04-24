import React from "react";
import "./root.css";
import useLocalStorage from 'use-local-storage';


import Entry from "./Components/Entry";

const App = () => {

    //Dark Mode
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const[theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    //Toggle between 'light' and 'dark' mode
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
         setTheme(newTheme);
    }

    return (
        <div className="main" data-theme={theme}>
            <button onClick={switchTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <Entry />
        </div>
    )
}

export default App;