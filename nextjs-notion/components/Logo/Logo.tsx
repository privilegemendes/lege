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
  font-size: 2rem;
  letter-spacing: -1px;
  text-decoration: none;
  color: hsl(53deg,100%,50%);
  margin-right: 32px;
`

const MyLogoFooter = styled.a `
  font-size: 1.5rem;
  text-decoration: none;
  color: hsl(230deg, 100%, 69%);

  @media only screen and @media (max-width: 725px) {
    order: 1;
    text-align: center;
    padding-bottom: 12px;
    -mox-box-align: center;
    align-items: center;
  }
`
const Privi = styled.span `
 .dark-mode & {
 	color: #ffff;
 }

  display: inline-flex;
  font-weight: 600;
  color: #0000;
  font-Family: 'Schoolbell', 'Roboto';
  letter-spacing: 1px;
  align-items: center;

`;

const Lege = styled.span `
  display: inline-flex;
  font-weight: 600;
  font-Family: 'Roboto';
  color: hsl(0, 95%, 46%);
  letter-spacing: 1.5px;
  align-items: center;
`;

const Slogan = styled.span `
 .dark-mode & {
 	color: #fff;
 }
  display: flex;
  font-weight: 800;
  font-size: 14px;
  color: #0000;
  align-items: flex-end;
`;

const SloganReally = styled.span `
  color: hsl(0, 95%, 46%);
`;

export const LogoHeader: FC = () => {

  return (
    // TODO: Check if it works for the header
    <MyLogoContainer>
      <MyLogoHeader href="/">
        <Privi>Privi</Privi>
        <Lege>lege</Lege>
      </MyLogoHeader>
    </MyLogoContainer>

  )

};

export const LogoFooter: FC = () => {

  return (
    <MyLogoContainer>
      <MyLogoFooter href="/">
        <Privi>Privi</Privi>
        <Lege>lege</Lege>
        <Slogan>Yes, that&apos;s<SloganReally>&nbsp;really&nbsp;</SloganReally>my name</Slogan>
      </MyLogoFooter>
    </MyLogoContainer>
  )
};
