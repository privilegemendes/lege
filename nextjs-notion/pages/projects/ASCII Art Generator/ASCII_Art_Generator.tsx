import Link from 'next/link'
import {
  AppBar,
  Code,
  CodeContainer,
  CodeTitle,
  CodeType,
  Container,
  Controls,
  Demo,
  DemoContainer,
  Description,
  Header,
  Main,
  Title
} from '../../../src/styles/SharedStyles'
import { useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'
import { LogoHeader } from '@/components/Logo/Logo'

export default function ASCIIArtGenerator() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(combineLetters(input));
  }, [input]);

  return (
    <Container>
      <AppBar>
        <LogoHeader/>
      </AppBar>
      <Main>
        <Demo>
          <DemoContainer>
            <pre>{output}</pre>
          </DemoContainer>
        </Demo>
        <Header>
          <Title>ASCII Art Generator</Title>
          <Description>
            <Link href="/">&larr; Go Back</Link>
          </Description>
        </Header>
        <Controls>
        </Controls>
        <Code>
          <CodeTitle>Your Ascii Code</CodeTitle>
          <CodeType>ASCII</CodeType>
          <CodeContainer type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </Code>
        {/*<CopyRow>*/}
        {/*  <CopyRowButton onClick={handleClick}>Show Letters</CopyRowButton>*/}
        {/*  <CopyRowButton>Copy 2</CopyRowButton>*/}
        {/*</CopyRow>*/}
      </Main>
      <Footer darkMode={false}/>
    </Container>
  )
}

function combineLetters(input) {

  if (!input) {
    return "";
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
  A: [ [` █████╗ `],
    [`██╔══██╗`],
    [`███████║`],
    [`██╔══██║`],
    [`██║  ██║`],
    [`╚═╝  ╚═╝`] ],
  B: [ [`██████╗ `],
    [`██╔══██╗`],
    [`██████╔╝`],
    [`██╔══██╗`],
    [`██████╔╝`],
    [`╚═════╝ `] ],
  C: [ [` ██████╗`],
    [`██╔════╝`],
    [`██║     `],
    [`██║     `],
    [` ██████╗`],
    [` ╚═════╝`] ],
  D: [ [`██████╗ `],
    [`██   ██╗`],
    [`██   ██║`],
    [`██   ██║`],
    [`██████╔╝`],
    [`╚═════╝ `] ],
  E: [ [`███████╗`],
    [`██╔════╝`],
    [`█████╗  `],
    [`██╔══╝  `],
    [`███████╗`],
    [`╚══════╝`] ],
  F: [ [`███████╗`],
    [`██╔════╝`],
    [`█████╗  `],
    [`██╔══╝  `],
    [`██║     `],
    [`╚═╝     `] ],
  G: [ [` ██████╗ `],
    [`██╔════╝ `],
    [`██║  ███╗`],
    [`██║   ██║`],
    [`╚██████╔╝`],
    [` ╚═════╝ `] ],
  H: [ [`██╗   ██╗`],
    [`██║   ██║`],
    [`████████║`],
    [`██╔═══██║`],
    [`██║   ██║`],
    [`╚═╝   ╚═╝`] ],
  I: [ [`██╗`],
    [`██║`],
    [`██║`],
    [`██║`],
    [`██║`],
    [`╚═╝`] ],
  J: [ [` █████████╗`],
    [` ╚═══██╔══╝`],
    [`     ██║   `],
    [`██╗  ██║   `],
    [` █████╔╝   `],
    [` ╚════╝    `] ],
  K: [ [`██╗   ██╗`],
    [`██║  ██╔╝`],
    [`██ ██╔╝  `],
    [`██║  ██╗ `],
    [`██║   ██╗`],
    [`╚═╝   ╚═╝`]],
  L: [ [`██╗     `],
    [`██║     `],
    [`██║     `],
    [`██║     `],
    [`███████╗`],
    [`╚══════╝`]],
  M: [ [`███╗   ███╗`],
    [`████╗ ████║`],
    [`██╔████╔██║`],
    [`██║╚██╔╝██║`],
    [`██║ ╚═╝ ██║`],
    [`╚═╝     ╚═╝`] ],
  N: [ [`███╗   ██╗`],
    [`████╗  ██║`],
    [`██╔██╗ ██║`],
    [`██║╚██╗██║`],
    [`██║ ╚████║`],
    [`╚═╝  ╚═══╝`] ],
  O: [ [` █████╗ `],
    [`██   ██╗`],
    [`██   ██║`],
    [`██   ██║`],
    [` █████╔╝`],
    [` ╚════╝ `] ],
  P: [ [`██████╗ `],
    [`██   ██╗`],
    [`██████╔╝`],
    [`██╔═══╝ `],
    [`██║     `],
    [`╚═╝     `] ],
  Q: [ [`  ████╗  `],
    [`██    ██╗`],
    [`██    ██║`],
    [`██ ██╗██║`],
    [`  ████╔╝ `],
    [`  ╚══██╝ `] ],
  R: [ [`██████╗ `],
    [`██╔══██╗`],
    [`██████╔╝`],
    [`██╔══██╗`],
    [`██║  ██║`],
    [`╚═╝  ╚═╝`] ],
  S: [ [` ██████╗`],
    [`██╔════╝`],
    [`███████╗`],
    [`╚════██║`],
    [`██████ ║`],
    [`╚══════╝`] ],
  T: [ [`████████╗`],
    [`╚══██╔══╝`],
    [`   ██║   `],
    [`   ██║   `],
    [`   ██║   `],
    [`   ╚═╝   `]],
  U: [ [`██╗   ██╗`],
    [`██║   ██║`],
    [`██║   ██║`],
    [`██║   ██║`],
    [`╚██████╔╝`],
    [` ╚═════╝ `] ],
  V: [ [`██╗   ██╗`],
    [`██║   ██║`],
    [`██║   ██║`],
    [`╚██╗ ██╔╝`],
    [` ╚████╔╝ `],
    [`  ╚═══╝  `] ],
  W: [ [`██╗     ██╗`],
    [`██║     ██║`],
    [`██║ ██╗ ██║`],
    [`██║████╗██║`],
    [` ██╔╝  ██╔╝`],
    [` ╚═╝   ╚═╝ `] ],
  X: [ [`██╗     ██╗`],
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
}
