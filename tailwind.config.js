const path = require('path');
const process = require('process');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
  mode: 'jit', //Enable Just in Time mode
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
    options: {
      safelist: {
          standard: ['dark'],
          deep    : [/^theme/, /^mat/]
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors  : {
        transparent: 'transparent',
        current    : 'currentColor',
        black      : colors.black,
        white      : colors.white,
        pink       : colors.pink,
        gray       : colors.blueGray,
        red        : colors.red,
        orange     : colors.orange,
        amber      : colors.amber,
        yellow     : colors.yellow,
        green      : colors.green,
        teal       : colors.teal,
        blue       : colors.blue,
        indigo     : colors.indigo,
        purple     : colors.purple
    },
    fontSize: {
        'xs'  : '0.625rem',
        'sm'  : '0.75rem',
        'md'  : '0.8125rem',
        'base': '0.875rem',
        'lg'  : '1rem',
        'xl'  : '1.125rem',
        '2xl' : '1.25rem',
        '3xl' : '1.5rem',
        '4xl' : '2rem',
        '5xl' : '2.25rem',
        '6xl' : '2.5rem',
        '7xl' : '3rem',
        '8xl' : '4rem',
        '9xl' : '6rem',
        '10xl': '8rem'
    },
    screens : {
        print: {'raw': 'print'},
        sm   : '600px',
        md   : '960px',
        lg   : '1280px',
        xl   : '1440px'
    },
    extend: {
      opacity   : {
          12: '0.12'
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

module.exports = config;
