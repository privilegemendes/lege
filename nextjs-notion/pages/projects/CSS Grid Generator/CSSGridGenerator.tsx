import * as React from 'react'
import { useState } from 'react'
import { AppBar, Container, Description, Main, Title } from '../../../src/styles/SharedStyles'
import { Footer } from '@/components/Footer'
import { GitHubShareButton } from '@/components/GitHubShareButton'
import styled from 'styled-components'
import { Roses } from '@/components/Roses/Roses'

export default function CSSGridGenerator() {

	const [isBroken, setIsBroken] = useState<boolean>(false);

	const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
		event.preventDefault();
		setIsBroken(true);
	}
	const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
		event.preventDefault();
		setIsBroken(false);
	}

  return <Container>
    <AppBar>
      <Title>Hero Editor</Title>
      <Description>
        A visual playground and code generator for CSS grid layouts.
      </Description>
      <GitHubShareButton />
    </AppBar>
    <Main>
		<RosesWrapper
			onMouseEnter={event => handleMouseEnter(event)}
			onMouseLeave={event => handleMouseLeave(event)}
		>
			<Roses isBroken={isBroken} />
		</RosesWrapper>
    </Main>
    <Footer darkMode={false} />
  </Container>
}

const RosesWrapper = styled.div`
	position: relative;
	z-index: 100;
	height: calc(100vh - 120px);
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	width: 100vw;
	padding: 8vmin 12vmin 8vmin 8vmin;
`;
