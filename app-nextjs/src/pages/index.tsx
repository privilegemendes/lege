import Head from 'next/head'
import {CodeTag, Container, Description, Main, Title,} from '../styles/SharedStyles'
import Cards from '../components/Cards'

export default function Home() {
  return (
      <Container>
        <Head>
          <title>Privilege Mendes</title>
          <meta name="description" content="Privilege's Site" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title>

          <Description>
            Get started by editing
            <CodeTag>pages/index.tsx</CodeTag>
          </Description>

          <Cards />
        </Main>
      </Container>
  )
}