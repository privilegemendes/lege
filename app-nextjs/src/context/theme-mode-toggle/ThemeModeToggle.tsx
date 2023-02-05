import {useDarkMode} from '../theme-context/ThemeContext';
import styled from "styled-components";
import React, {useEffect, useState} from "react";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-background);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-background);
  },
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(props) =>
    props.color === "dark"
        ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
        : "none"};

`;


export default function ThemeModeToggle() {

    const { colorMode, setColorMode } = useDarkMode()
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);

    const inactiveTheme = colorMode === "dark" ? "light" : "dark";

    // Save the theme choice to localStorage
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    const handleToggle = (event: React.MouseEvent<MouseEvent | HTMLButtonElement>) => {
        setColorMode(colorMode === "dark" ? "light" : "dark");
        setActiveTheme(inactiveTheme)
    }

    return (
    <ToggleButton
        aria-label={`Change to ${inactiveTheme} mode`}
        type="button"
        onClick={(event) => handleToggle(event)}
    >
        <ToggleThumb color={colorMode} />
        <span>🌙</span>
        <span>☀ </span>
    </ToggleButton>

    );
};