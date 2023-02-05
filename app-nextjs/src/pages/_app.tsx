import type {AppProps} from 'next/app'
import {ThemeProvider} from '../context/theme-context/ThemeContext'
import {GlobalStyles} from '../styles/GlobalStyles'
import {Header} from "../components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <Header siteTitle={'lege'}/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}