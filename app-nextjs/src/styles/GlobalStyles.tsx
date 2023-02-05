import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: var(--color-background);
    color: var(--color-primary);
    padding: 0;
    margin: 0;

  }
  a {
    color: var(--color-secondary);
    text-decoration: none;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`