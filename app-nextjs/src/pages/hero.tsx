import Link from 'next/link'
import {Container, Description, Main, Title} from '../styles/sharedStyles'
import {Roses} from "../components/Hero/Roses";

export default function Hero() {
    return (
        <Container>
            <Main>
                <Title>Hero</Title>
                <Roses isBroken={false} />
                <Description>
                    <Link href="/">&larr; Go Back</Link>
                </Description>
            </Main>
        </Container>
    )
}