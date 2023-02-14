import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
	AppBar,
	CodeContainer,
	Container,
	DemoContainer,
	Description,
	Main,
	Title
} from '../../../src/styles/SharedStyles'
import { Footer } from '@/components/Footer'
import { GitHubShareButton } from '@/components/GitHubShareButton'
import styled from 'styled-components'
import Button from '@/components/Button/Button'

export default function ASCIIArtGenerator() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

	const onClickToCopy = useCallback(
		(e: React.MouseEvent) => {
			const value = (e.target as HTMLPreElement).innerText.trim();
			navigator.clipboard.writeText(value);
		},
		[],
	);

  useEffect(() => {
    setOutput(combineLetters(input));
  }, [input]);

  return <Container>
      <AppBar>
        <Title>ASCII Art Generator</Title>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
        <GitHubShareButton/>
      </AppBar>
      {/*<ToastShelf/>*/}
    <Main>
      <Grid>
        <GridOutput>
          <DemoContainer>
            <OutputDisplay>{output}</OutputDisplay>
          </DemoContainer>
        </GridOutput>
        <GridInput>
          <CodeContainer type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </GridInput>
        <GridControls>
          <Button onClick={(e)=> (onClickToCopy(e))}>Copy Art</Button>
          <Description>
            What does this project do?
          </Description>
        </GridControls>
      </Grid>
    </Main>
      <Footer darkMode={false}/>
    </Container>;
}

const content = {
  error: 'Invalid input. Please enter a string of letters and numbers.',
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 16px;
  }
`;
const GridOutput = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;

const GridInput = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

const GridControls = styled.div`
  grid-area: 2 / 2 / 3 / 3;

  @media screen and (max-width: 700px) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

const OutputDisplay = styled.pre`
	font-size: 0.7rem;
`;

// <Main>
//   <Demo>
//     <DemoContainer>
//       <pre>{output}</pre>
//     </DemoContainer>
//   </Demo>
//   <Header>
//
//
//   </Header>
//   <Controls>
//   </Controls>
//   <Code>
//     <CodeTitle>Your Ascii Code</CodeTitle>
//     <CodeType>ASCII</CodeType>
//     <CodeContainer type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
//   </Code>
//   {/*<CopyRow>*/}
//   {/*  <CopyRowButton onClick={handleClick}>Show Letters</CopyRowButton>*/}
//   {/*  <CopyRowButton>Copy 2</CopyRowButton>*/}
//   {/*</CopyRow>*/}
// </Main>
function combineLetters(input) {

  if (!input) {
    return "";
  }
  const isAlphabet = /^[a-zA-Z0-9 !?/:-]+$/.test(input);
  if (!isAlphabet) {
    return content.error;
  }

  const combined = input.toUpperCase().split("").map((letter) => {

    if (letterMap[letter]) {
      return letterMap[letter];
    } else {

      return [[" "], [" "], [" "], [" "], [" "], [" "]];
    }
  });

  const combinedRows = combined[0].map((_, i) => {
    return combined.map((letter) => letter[i]).join("") + " ";
  });

  return combinedRows.join("\n");
}

const letterMap ={
  A: [
		[` █████╗ `],
		[`██╔══██╗`],
		[`███████║`],
		[`██╔══██║`],
		[`██║  ██║`],
		[`╚═╝  ╚═╝`] ],
  B: [
		[`██████╗ `],
    [`██╔══██╗`],
    [`██████╔╝`],
    [`██╔══██╗`],
    [`██████╔╝`],
    [`╚═════╝ `] ],
  C: [
		[` ██████╗`],
    [`██╔════╝`],
    [`██║     `],
    [`██║     `],
    [` ██████╗`],
    [` ╚═════╝`] ],
  D: [
		[`██████╗ `],
    [`██   ██╗`],
    [`██   ██║`],
    [`██   ██║`],
    [`██████╔╝`],
    [`╚═════╝ `] ],
  E: [
		[`███████╗`],
    [`██╔════╝`],
    [`█████╗  `],
    [`██╔══╝  `],
    [`███████╗`],
    [`╚══════╝`] ],
  F: [
		[`███████╗`],
    [`██╔════╝`],
    [`█████╗  `],
    [`██╔══╝  `],
    [`██║     `],
    [`╚═╝     `] ],
  G: [
		[` ██████╗ `],
    [`██╔════╝ `],
    [`██║  ███╗`],
    [`██║   ██║`],
    [`╚██████╔╝`],
    [` ╚═════╝ `] ],
  H: [
		[`██╗   ██╗`],
    [`██║   ██║`],
    [`████████║`],
    [`██╔═══██║`],
    [`██║   ██║`],
    [`╚═╝   ╚═╝`] ],
  I: [
		[`██╗`],
    [`██║`],
    [`██║`],
    [`██║`],
    [`██║`],
    [`╚═╝`] ],
  J: [
		[` █████████╗`],
    [` ╚═══██╔══╝`],
    [`     ██║   `],
    [`██╗  ██║   `],
    [` █████╔╝   `],
    [` ╚════╝    `] ],
  K: [
		[`██╗   ██╗`],
    [`██║  ██╔╝`],
    [`██ ██╔╝  `],
    [`██║  ██╗ `],
    [`██║   ██╗`],
    [`╚═╝   ╚═╝`]],
  L: [
		[`██╗     `],
    [`██║     `],
    [`██║     `],
    [`██║     `],
    [`███████╗`],
    [`╚══════╝`]],
  M: [
		[`███╗   ███╗`],
    [`████╗ ████║`],
    [`██╔████╔██║`],
    [`██║╚██╔╝██║`],
    [`██║ ╚═╝ ██║`],
    [`╚═╝     ╚═╝`] ],
  N: [
		[`███╗   ██╗`],
    [`████╗  ██║`],
    [`██╔██╗ ██║`],
    [`██║╚██╗██║`],
    [`██║ ╚████║`],
    [`╚═╝  ╚═══╝`] ],
  O: [
		[` ███████╗ `],
    [`██     ██╗`],
    [`██     ██║`],
    [`██     ██║`],
    [` ███████╔╝`],
    [` ╚══════╝ `] ],
  P: [
		[`██████╗ `],
    [`██   ██╗`],
    [`██████╔╝`],
    [`██╔═══╝ `],
    [`██║     `],
    [`╚═╝     `] ],
  Q: [
		[`  ████╗  `],
    [`██    ██╗`],
    [`██    ██║`],
    [`██ ██╗██║`],
    [`  ████╔╝ `],
    [`  ╚══██╝ `] ],
  R: [
		[`██████╗ `],
    [`██╔══██╗`],
    [`██████╔╝`],
    [`██╔══██╗`],
    [`██║  ██║`],
    [`╚═╝  ╚═╝`] ],
  S: [
		[` ██████╗`],
    [`██╔════╝`],
    [`███████╗`],
    [`╚════██║`],
    [`██████ ║`],
    [`╚══════╝`] ],
  T: [
		[`████████╗`],
    [`╚══██╔══╝`],
    [`   ██║   `],
    [`   ██║   `],
    [`   ██║   `],
    [`   ╚═╝   `]],
  U: [
		[`██╗   ██╗`],
    [`██║   ██║`],
    [`██║   ██║`],
    [`██║   ██║`],
    [`╚██████╔╝`],
    [` ╚═════╝ `] ],
  V: [
		[`██╗   ██╗`],
    [`██║   ██║`],
    [`██║   ██║`],
    [`╚██╗ ██╔╝`],
    [` ╚████╔╝ `],
    [`  ╚═══╝  `] ],
  W: [
		[`██╗     ██╗`],
    [`██║     ██║`],
    [`██║ ██╗ ██║`],
    [`██║████╗██║`],
    [` ██╔╝  ██╔╝`],
    [` ╚═╝   ╚═╝ `] ],
  X: [
		[`██╗     ██╗`],
    [`  ██╗ ██╔╝ `],
    [`    ██╔╝   `],
    [`  ██╗ ██╗  `],
    [`██╔╝    ██╗`],
    [`╚═╝     ╚═╝`]],
  Y: [ [`██╗     ██╗`],
       [` ██╗   ██╔╝`],
       [`   ████╔╝  `],
       [`    ██╔╝   `],
       [`    ██║    `],
       [`    ╚═╝    `] ],
  Z: [ [`████████╗`],
       [`╚════██╔╝`],
       [`   ██╔╝  `],
       [` ██╔╝    `],
       [`████████╗`],
       [`╚═══════╝`]],
  '-': [ [`   `],
         [`   `],
         [`██╗`],
         [`╚═╝`],
         [`   `],
         [`   `] ],
	':': [
		[`   `],
		[`   `],
		[`██╗`],
		[`██║`],
		[`╚═╝`],
		[`   `] ],
	' ': [
		[`  `],
		[`  `],
		[`  `],
		[`  `],
		[`  `],
		[`  `] ],
	'!': [
		[`██╗`],
		[`██║`],
		[`██║`],
		[`╚═╝`],
		[`██╗`],
		[`╚═╝`] ],
	'?': [
		[` █████╗ `],
		[`██   ██╗`],
		[`    ██╔╝`],
		[`  ██╔╝  `],
		[`  ██║   `],
		[`  ╚═╝   `] ],
	'/': [
		[`    ██╗`],
		[`   ██╔╝`],
		[`  ██╔╝ `],
		[` ██╔╝  `],
		[`██╔╝   `],
		[`╚═╝    `]],
	'\\': [
		[`██╗    `],
		[` ██╗   `],
		[`  ██╗  `],
		[`   ██╗ `],
		[`    ██╗`],
		[`    ╚═╝`]],
	'[': [
		[`████╗`],
		[`██╔═╝`],
		[`██║  `],
		[`██║  `],
		[`████╗`],
		[`╚═══╝`] ],
	']': [
		[`████╗`],
		[`  ██║`],
		[`  ██║`],
		[`  ██║`],
		[`████║`],
		[`╚═══╝`] ],
	')': [
		[` ███╗`],
		[`   ██║`],
		[`   ██║`],
		[`   ██║`],
		[` ███║`],
		[` ╚══╝`] ],
	'(': [
		[` ███╗`],
		[`██╔═╝`],
		[`██║  `],
		[`██║  `],
		[` ███╗`],
		[` ╚══╝`] ],
	0: [
		[` █████╗ `],
		[`██   ██╗`],
		[`██   ██║`],
		[`██   ██║`],
		[` █████╔╝`],
		[` ╚════╝ `] ],
	1: [
		[`████╗  `],
		[`  ██║  `],
		[`  ██║  `],
		[`  ██║  `],
		[`██████╗`],
		[`╚═════╝`] ],
	2: [
		[`██████╗`],
		[`    ██║`],
		[`██████║`],
		[`██║    `],
		[`██████╗`],
		[`╚═════╝`] ],
	3: [
		[`██████╗`],
		[`    ██║`],
		[`██████║`],
		[`    ██║`],
		[`██████║`],
		[`╚═════╝`] ],
	5: [
		[`██████╗`],
		[`██════╝`],
		[`██████╗`],
		[`    ██║`],
		[`██████║`],
		[`╚═════╝`] ],
	6: [
		[` █████╗ `],
		[`██════╝ `],
		[`██████╗ `],
		[`██   ██║`],
		[` █████╔╝`],
		[` ╚════╝ `] ],
	7: [
		[`██████╗`],
		[`    ██║`],
		[`    ██║`],
		[`    ██║`],
		[`    ██║`],
		[`    ╚═╝`] ],
	8: [
		[` █████╗ `],
		[`██   ██║`],
		[` █████╔╝`],
		[`██   ██║`],
		[` █████╔╝`],
		[` ╚════╝ `] ],
	9: [
		[` █████╗ `],
		[`██   ██║`],
		[` ██████║`],
		[`     ██║`],
		[` █████╔╝`],
		[` ╚════╝ `] ],

}
