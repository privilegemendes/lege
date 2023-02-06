import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Header } from '../components/Header/Header'
import { MyThemeProvider } from '../context/theme-context/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <MyThemeProvider>
                <GlobalStyles />
                <Header siteTitle={'lege'}/>
                <Component {...pageProps} />
            </MyThemeProvider>
        </>
    )
}