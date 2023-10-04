import { extendTheme } from '@chakra-ui/react'

// aliases for breakpoints
// default font size = 17px

export const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  xxl: '128em'
} as const

export const mgTheme = extendTheme({
  styles: {
    global: {
      'h1,h2,h3,h4,h5,h6': {
        fontFamily: `"Brandon Grotesque", -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;`,
        margin: 0
      },
      h1: {
        fontWeight: 300,
        fontSize: { base: '28px', lg: '50px' },
        lineHeight: { base: 34 / 18, lg: 66 / 50 }
      },
      h2: {
        fontWeight: 700,
        fontSize: { base: '24px', lg: '40px' },
        lineHeight: { base: 30 / 24, lg: 52 / 40 },
        margin: { base: '0 0 10px' },
        marginBottom: { lg: '15px' }
      },
      h3: {
        fontWeight: 300,
        fontSize: { base: '22px', lg: '32px' },
        lineHeight: { base: 28 / 22, lg: 42 / 32 },
        marginBottom: { base: '20px', lg: '30px' }
      },
      h4: {
        fontWeight: 700,
        fontSize: { base: '18px', lg: '24px' },
        lineHeight: { base: 24 / 18, lg: 30 / 24 },
        marginBottom: { base: '10px', lg: '20px' }
      },
      h5: {
        fontWeight: 700,
        fontSize: { base: '16px', lg: '20px' },
        lineHeight: { base: 22 / 16, lg: 26 / 20 },
        marginBottom: { base: '5px', lg: '10px' }
      },
      h6: {
        textTransform: 'uppercase',
        marginBottom: 0,
        fontWeight: { base: 300, lg: 700 },
        fontSize: { base: '14px', lg: '18px' },
        lineHeight: { base: 20 / 14, lg: 26 / 18 }
      },
      body: {
        lineHeight: 28 / 17,
        margin: 0,
        padding: 0,
        background: '#ffffff',
        color: '#555555',

        ul: {
          display: 'block',
          listStyleType: 'disc',
          marginBlockStart: '1em',
          marginBlockEnd: '1em',
          marginInlineStart: '0px',
          marginInlineEnd: '0px',
          paddingInlineStart: '40px'
        }
      },
      time: {
        fontSize: '14px'
      }
    }
  },
  fonts: {
    body: `"Source Sans Pro", -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;`,
    heading: `"Brandon Grotesque", -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;`,
    mono: 'Menlo, monospace'
  },
  breakpoints: {
    base: '0em',
    sm: '435px', //435px
    md: '768px', // 768px
    lg: '1110px', // 1110px
    xl: '1440px',
    '2xl': '1536px'
  },
  colors: {
    mg: {
      500: '#526eff',
      600: '#2D3383',
      backgroundRow: '#EFEFF1',
      blue: '#35b6d0',
      blueDark: '#526eff',
      branding: '#1F1B50',
      brandingElements: '#526EFF',
      brandingElementsHover: '#405AE0',
      brandingLight: '#E3E8FD',
      error: '#FA8072',
      formElementsBorder: '#CBCBCB',
      gray: '#efeff1',
      grayDark: '#616877',
      grayMedium: '#9a9999',
      green: '#96d134',
      hover: '#E6E6E6',
      lightGray: '#F7F7F9',
      navy: '#1F1B50',
      pink: '#dda0dd',
      purple: '#a22ec8',
      red: '#ed1b24',
      salmon: '#fa8072',
      states: '#D3D4D6',
      spreadsheetBorder: 'rgb(97, 104, 119)',
      text: '#555555',
      textLight: '#FFFFFF',
      visitedLink: '#DDA0DD',
      white: '#ffffff',
      yellow: '#ffd35a',

      // Defaults
      base: '#555555',
      border: '#EFEFF1',
      elementsBorder: '#CBCBCB',
      baseHover: '#405AE0'
    }
  },
  components: {
    Drawer: {
      parts: ['dialog', 'dialogContainer', 'overlay', 'body'],
      variants: {
        'mobile-nav': {
          dialog: {
            top: { base: '56px !important' }
          },
          dialogContainer: {
            top: { base: '56px !important' }
          },
          overlay: {
            top: { base: '56px !important' }
          },
          body: {
            paddingInlineStart: '0 !important',
            paddingInlineEnd: '0 !important',
          }
        }
      }
    }
  }
})
