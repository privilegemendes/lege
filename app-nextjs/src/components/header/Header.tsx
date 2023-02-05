import React from 'react';
import styled from 'styled-components';
import dynamic from "next/dynamic";

const ToggleTheme = dynamic(() => import('../../context/theme-mode-toggle/ThemeModeToggle'), {
    ssr: false
});

export const Header = ({ siteTitle }) => {
    return (
        <HeaderContainer>
            <HeaderContainer2>
                <Wrapper>
                    {siteTitle}
                    <HeaderNav>
                        <Logo>
                            <LogoPriviUpTick>
                                <LogoPrivi>

                                </LogoPrivi>
                                <LogoUpTick>

                                </LogoUpTick>
                            </LogoPriviUpTick>
                            <LogoLege>Lege </LogoLege>
                            <LogoMendes> Mendes</LogoMendes>
                        </Logo>
                    </HeaderNav>
                    <HeaderSettings>
                        <ToggleTheme />
                    </HeaderSettings>
                </Wrapper>
            </HeaderContainer2>
        </HeaderContainer>

    );
};

const Wrapper = styled.header`
  height: 3.75rem;
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  padding: 0px;
`;

const HeaderContainer = styled.div `
  background: var(--background);
  top: -1px;
  z-index: 3;
  position: sticky;
  transition: background 350ms ease 0s;
`
const HeaderContainer2 = styled.div `
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
`

const HeaderNav = styled.div `
    flex: 1 1 0%;
    display: flex;
    -moz-box-align: baseline;
    align-items: baseline;
`
const HeaderSettings = styled.div `
    // flex: 0 1 0%;
    // display: flex;
    // -moz-box-align: baseline;
    // align-items: baseline;
`
const Logo = styled.a `
   display: flex;
    font-size: 24px;
    letter-spacing: -1px;
    padding: 0px;
    text-decoration: none;
    color: var(--color-primary);
`
const LogoLege = styled.span `
    @media (prefers-reduced-motion: no-preference) {
    
    }
    display: inline-block;
    font-weight: var(--font-weight-medium);
    animation: 300ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 750ms 1 normal both running none;
`
const LogoMendes = styled.span `
    @media (prefers-reduced-motion: no-preference) {
    
    }
    display: inline-block;
    font-weight: var(--font-weight-medium);
    animation: 300ms cubic-bezier(0.27, 0.22, 0.44, 1.03) 825ms 1 normal both running none;
`
const LogoPriviUpTick = styled.span `
    display: inline-block;
    position: relative;
    width: 18px;
`

const LogoPrivi = styled.span `
    position: absolute;
    left: 2px;
    top: 1px;
`

const LogoUpTick = styled.span `
    position: absolute;
    left: 6px;
    bottom: 2px;
`

