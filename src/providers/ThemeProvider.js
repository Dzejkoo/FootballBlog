import React, { useState, useEffect } from 'react';

export const ModeContext = React.createContext({
  themeToggler: () => {},
});

export const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [checked, setChecked] = useState(localStorage.getItem('toggle-switch') === 'true');

  const themeToggler = (e) => {
    localStorage.setItem('toggle-switch', `${e.target.checked}`);
    setChecked(e.target.checked);
    console.log(theme);
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    console.log(localTheme);
    if (localTheme) {
      //set previous theme
      setTheme(localTheme);
    } else {
      //set basic theme
      setTheme('light');
      //save basic theme
      window.localStorage.setItem('theme', 'light');
    }
  }, []);
  return <ModeContext.Provider value={{ themeToggler, checked, theme }}>{children}</ModeContext.Provider>;
};
