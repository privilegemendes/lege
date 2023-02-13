import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Title } from '../src/styles/SharedStyles'
import Image from 'next/image'
import ArtiryLogo from '../public/artiry-white.svg'

const Artiry = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('https://artiry.com?ea=U2Q2aC7d8n8Ilu9HbZ8x').then(r => console.log(r));
      }, 2000);

  }, [router]);

  return<ArtiryRedirectContainer>
      <ArtiryImage>
        <Image src={ArtiryLogo}/>
      </ArtiryImage>
      <ArtiryText>
      <Title>You are being redirected to artiry.com</Title>
      </ArtiryText>
    </ArtiryRedirectContainer>
};

export default Artiry;


const ArtiryRedirectContainer = styled.div
`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  isolation: isolate;
  background: hsl(210deg, 30%, 8%);
  height: 100vh;
`;

const ArtiryImage = styled.div`
 grid-area: 2 / 2 / 3 / 3;
 margin: auto;
`

const ArtiryText = styled.div`
 grid-area: 3 / 2 / 4 / 3;
 margin: auto;
`
