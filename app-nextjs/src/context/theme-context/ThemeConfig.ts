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