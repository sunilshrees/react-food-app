import React, { useEffect, useState } from 'react';
import { BiRestaurant } from 'react-icons/bi';
import { BsFillLightbulbFill } from 'react-icons/bs';
import Search from './components/Search';
import Results from './components/Results';

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function App() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <>
            <div className='container'>
                <button className='toggle' onClick={toggleTheme}>
                    {theme === 'light-theme' ? 'Dark ' : 'Light  '}
                    <BsFillLightbulbFill />
                </button>
                <BiRestaurant className='logo' />
                <div className='title'>Find Meals for your ingredients</div>
                <Search />
            </div>
        </>
    );
}

export default App;
