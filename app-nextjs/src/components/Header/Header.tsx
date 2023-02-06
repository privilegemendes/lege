import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import MyLogo from '../../assets/logo.svg'

import { BREAKPOINTS, COLORS } from '../../context/theme-context/ThemeConfig'
import { InvisibleButton } from '../InvisibleButton/InvisibleButton'
import { number } from 'prop-types'

const ICON_SIZE = 22;

const ToggleTheme = dynamic(() => import('../../context/theme-mode-toggle/ThemeModeToggle'), {
    ssr: false
});

export const Header = ({ siteTitle }) => {

    const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        if (!isTitleVisible && currentScrollPosition > window.innerHeight * 0.7) {
            setIsTitleVisible(true);
        } else if (
            isTitleVisible &&
            currentScrollPosition < window.innerHeight * 0.5
        ) {
            setIsTitleVisible(false);
        }
    };

   const  scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

   useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
   }, []);

   return (
        <HeaderContainer>
            <HeaderContainer2>
                <Wrapper>
                    <HeaderNav>
                        <Link href="/">
                            <Logo>
                                <Image src={MyLogo} height={50} alt="Logo" />
                            </Logo>
                        </Link>
                        <Nav>
                            <NavItem>
                                <Link href="/about">
                                    About
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/posts">
                                    Posts
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/projects">
                                    Projects
                                </Link>
                            </NavItem>
                        </Nav>
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
const Logo = styled.div `
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

const LogoUpTick = styled.span `
    position: absolute;
    left: 2px;
    top: 1px;
`

const LogoPrivi = styled.span `
    position: absolute;
    left: 6px;
    bottom: 2px;
`

const Nav = styled.nav `
    display: flex;
    list-style: none;
    '& > ul': {
        display: flex;
        padding: 0px;
    }
`
const NavItem = styled.li `
    margin: 10px;
    '& > div': {
        display: flex;
        position: relative;
        align-items: center;
        '& > a': {
            position: relative;
            padding: 10px;
            text-decoration: none;
            color: var(--color-text);
            font-weight: var(--font-weight-medium);
            font-size: 1rem;
        },
    },
`

const Props = {
    height: number,
    size: number

}


const InnerWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  right: 10px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.gray500};
  background: ${COLORS.text};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
  @media (orientation: portrait) {
    left: 0;
    right: 0;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 700ms;
  text-align: center;
`;

const Title = styled(InvisibleButton)`
  display: inline-block;
  color: ${props => props.color || COLORS.text};
  font-weight: 600;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${BREAKPOINTS.md} {
    /* Subtract roughly the amount of space needed for the home icon on the
    left, and duplicate it for the right side to preserve balance */
    max-width: calc(100vw - 55px - 55px);
  }
  @media ${BREAKPOINTS.mdMin} {
    /* Subtract roughly the amount of space needed for the home icon on the
    left, and duplicate it for the right side to preserve balance */
    max-width: 600px;
  }
  &::selection {
    color: ${COLORS.text};
    background-color: ${COLORS.gray700};
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  height: 10px;
  padding-left: 10px;
  padding-right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const RssAnchor = styled.a`
  display: block;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.gray500};
  &:hover {
    color: ${COLORS.gray700};
  }
`;
