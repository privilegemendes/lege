import Link from 'next/link'
import {Container, Description, Main, Title} from '../styles/SharedStyles'

export default function About() {
    return (
        <Container>
            <Main>
                <Title>About Page</Title>
                <Description>
                    <Link href="/">&larr; Go Back</Link>
                </Description>
            </Main>
        </Container>
    )
}