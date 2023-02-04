import styled from "styled-components";


export const Button = styled.button `
    display: flex;
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: center;
    background: transparent;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }
 `