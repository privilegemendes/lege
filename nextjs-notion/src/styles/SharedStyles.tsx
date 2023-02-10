import styled from 'styled-components'

export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(210deg, 30%, 8%)', // navy navy blue
  },
  primary: {
    light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    dark: 'hsl(230deg, 100%, 69%)', // Yellow
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(333deg, 100%, 52%)', // Cyan
  },
  tertiary: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(53deg, 100%, 50%)', // white
  },
  homepage: {
    light: 'hsl(204deg, 67%, 85%)', // white
    dark: 'hsl(200deg, 100%, 85%, 0.1)', // near-black
  },
  homepageBackground: {
    light: 'hsl(204deg, 67%, 85%)', // white
    dark: 'hsl(210deg, 30%, 8%)', // near-black
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray100: {

  },
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 540,
  md: 900,
  lg: 1024,
  xl: 1440,
};

export const BREAKPOINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsMin: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
  smMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
  xlMin: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
}

export const READING_WIDTH = 850;
export const EXTRA_WIDE_WIDTH = 1024;

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;

const userAgent =
  typeof window !== 'undefined' ? window.navigator.userAgent : 'node';

export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent);

export const Z_INDICES = {
  hero: 1,
  mainContent: 10,
  header: 100,
};

const AppBar = styled.header`
  --color-primary: hsl(53deg,100%,50%);
  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: baseline;
  align-items: baseline;
  padding: 18px;
  // border-bottom: 1px solid hsl(210deg, 15%, 20%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  position: relative;
  min-height: 100vh;
  height: 100%;
  isolation: isolate;
  background: hsl(210deg, 30%, 8%);
  color: #fff;
`
const Main = styled.div`
  flex: 1;
`

const Demo = styled.div`
  grid-area: demo;
  position: sticky;
  z-index: 3;
  top: 32px;
  align-self: start;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  height: 100%;
  max-height: min(860px, -64px + 100vh);
  background-color: "white";
  filter: drop-shadow(0px 0px 16px hsl(210deg, 30%, 8%));
`
const DemoContainer = styled.div`
  flex: 1 1 0%;
  width: 100%;
  border: 2px solid hsl(210deg, 15%, 20%);
  border-radius: 8px;
  color: #fff;
  padding: 16px;
  overflow-x: auto;
  height: 152px;
`

const Header = styled.header`
  position: relative;
  z-index: 3;
  grid-area: header;
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  text-align: center;
  padding-top: 32px;
  isolation: isolate;
`

const Title = styled.h1`
    position: relative;
    z-index: 2;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    color: initial;
    background-color: rgb(255, 178, 62);
    background-image: radial-gradient(rgb(255, 230, 128), rgba(255, 230, 128, 0) 40%), conic-gradient(from 90deg, rgb(255, 198, 26), rgb(255, 238, 128), rgb(255, 198, 26), rgb(255, 238, 128), rgb(255, 198, 26), rgb(255, 252, 230), rgb(255, 198, 26));
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 16px;
    margin-bottom: 0px;
    filter: drop-shadow(0px 0px 2px hsl((210deg 30% 8%) / 0.5)) drop-shadow(0px 0px 4px hsl((210deg 30% 8%) / 0.5)) drop-shadow(0px 0px 8px hsl((210deg 30% 8%) / 0.5)) drop-shadow(0px 0px 16px hsl((210deg 30% 8%) / 0.5)) drop-shadow(0px 0px 32px hsl((210deg 30% 8%) / 0.5)) drop-shadow(0px 0px 64px hsl((210deg 30% 8%) / 0.5));
`

const Description = styled.p`
  position: relative;
  padding-top: 16px;
  z-index: 3;
  font-size: 1.25rem;
  text-align: center;
  max-width: 400px;
  margin: 0;
  color: hsl(210deg, 14%, 66%);
`

const Controls = styled.div`
  grid-area: controls;
  position: relative;
  z-index: 4;
  filter: drop-shadow(0px 0px 16px hsl(210deg, 30%, 8%));
 `;

const Code = styled.code`
  grid-area: code;
  position: relative;
  z-index: 1;
  min-width: 0px;
`

const CodeTitle = styled.div`
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: baseline;
  align-items: baseline;
  margin-bottom: 8px;
  user-select: none;
  font-weight: 500;
  color: hsl(0deg,0%,100%);
`;

const CodeContainer = styled.input`
  position: relative;
  text-align: left;
  box-sizing: border-box;
  overflow: visible !important;
  white-space: pre;
  // font-family: 'League Mono' 'Fira Mono', monospace;
  color: #fff;
  background-color: hsl(210deg, 30%, 12%);
  font-size: 1rem;
  padding: 8px 16px;
  overflow: auto;
  border: none;
  width: 100%;
  height: 100%;
`;
const CodeType = styled.div`
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 14px;
  transform: translateY(-100%);
  font-size: 18px;
  padding: 2px 12px 0px;
  background: hsl(210deg, 30%, 12%);
  border-radius: 8px 8px 0px 0px;
  text-transform: uppercase;
  color: hsl(210deg, 14%, 66%);
  font-weight: 500;
  // font-family: 'League Mono' 'Fira Mono', monospace;
  pointer-events: none;
  user-select: none;
`;

const CopyRow = styled.div`
  display: flex;
  -moz-box-pack: end;
  justify-content: flex-end;
  gap: 16px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  transform: translateY(calc(100% + 16px));
`;

const CopyRowButton = styled.button`
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 12px;
  font-size: 0.875rem;
  border: 2px solid hsl(210deg, 15%, 20%);
  border-radius: 4px;
  color: white;
`;


const DesktopOnly = styled.div`
@media ${BREAKPOINTS.md} {
    display: none;
    }
`;

const MobileOnly = styled.div`
@media ${BREAKPOINTS.mdMin} {
    display: none;
    }
`;

export {AppBar, Header, Container, Main, Demo, DemoContainer, Title, Description, Code, CodeType, CodeTitle, CodeContainer, CopyRowButton, CopyRow, Controls, DesktopOnly, MobileOnly};

