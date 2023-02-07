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


const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  a {
    color: var(--color-secondary);
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

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

export { Container, Main, Title, Description, CodeTag, DesktopOnly }

