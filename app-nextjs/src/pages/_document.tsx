import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { FallbackStyles, MagicScriptTag } from '../context/theme-context/InlineCssVariables'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        const setInitialTheme = `
          function getUserPreference() {
            if(window.localStorage.getItem('theme')) {
              return window.localStorage.getItem('theme')
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches 
              ? 'dark' 
              : 'light'
          }
          document.body.dataset.theme = getUserPreference();
        `;
        return (
            <Html lang="en">
                <Head>
                    <title>Privilege's Site</title>
                    <FallbackStyles />
                </Head>
                <body>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <MagicScriptTag/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}