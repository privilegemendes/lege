import styled from 'styled-components'
import * as React from 'react'
import { FC } from 'react'

const MyLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and @media (max-width: 725px) {
    text-align: center;
    padding-bottom: 16px;
    -moz-box-align: center;
    align-items: center;
  }
`;


const MyLogoHeader = styled.a `
  display: flex;
  font-size: 24px;
  letter-spacing: -1px;
  text-decoration: none;
  color: hsl(230deg, 100%, 69%);
  margin-right: 32px;
`

const MyLogoFooter = styled.a `
  font-size: 24px;
  letter-spacing: -1px;
  text-decoration: none;
  color: hsl(230deg, 100%, 69%);
  margin-right: 32px;

  @media only screen and @media (max-width: 725px) {
    order: 1;
    text-align: center;
    padding-bottom: 16px;
    -mox-box-align: center;
    align-items: center;
  }
`
const Privi = styled.span `
  display: inline-block;
  font-weight: 600;
  color: hsl(210deg, 14%, 66%);
`;

const Lege = styled.span `
  display: inline-block;
  font-weight: 600;
`;

const Mendes = styled.span `
  display: inline-block;
  font-weight: 600;
`;

export const LogoHeader: FC = () => {

  return (
    // TODO: Check if it works for the header
    <MyLogoContainer>
      <MyLogoHeader href="/">
        <Privi>Privi</Privi>
        <Lege>lege &nbsp;</Lege>
        <Mendes>Mendes</Mendes>
      </MyLogoHeader>
    </MyLogoContainer>

  )

};

export const LogoFooter: FC = () => {

  return (
    <MyLogoContainer>
      <MyLogoFooter href="/">
        <Privi>Privi</Privi>
        <Lege>lege &nbsp;</Lege>
        <Mendes>Mendes</Mendes>
      </MyLogoFooter>
    </MyLogoContainer>
  )
};
