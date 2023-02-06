import { createGlobalStyle } from 'styled-components'
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
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
  
  img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
    #root, #__next {
      isolation: isolate;
    }


`