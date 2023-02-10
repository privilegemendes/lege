import * as React from 'react'
import { AppBar, Container, Main, Title } from '../../../src/styles/SharedStyles'
import { Footer } from '@/components/Footer'
import { GitHubShareButton } from '@/components/GitHubShareButton'
import styled from 'styled-components'

export default function Robofriends() {

  return <Container>
    <AppBar>
      <Title>Robofriends</Title>
      <GitHubShareButton/>
    </AppBar>
    <Main>
        <Grid/>
    </Main>
    <Footer darkMode={false}/>
  </Container>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;


.div1 { grid-area: 1 / 1 / 2 / 3; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
`;


