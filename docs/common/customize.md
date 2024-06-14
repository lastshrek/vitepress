# Customize

主要修改`tailwindcss.config.js`里面的`theme`内容

```js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',],
  plugins: [],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      width: {
        0.75: '0.188rem',
        8.5: '2.125rem',
        13: '3.25rem',
      },
      height: {
        0.75: '0.188rem',
        3.5: '0.875rem',
        5.25: '1.313rem',
        6.5: '1.625rem',
        7.25: '1.875rem',
      },
      margin: {
        3.375: '0.844rem',
        4.125: '1.031rem',        
      },
      padding: {
        75: '18.75rem',
        4.125: '1.031rem',
      },
      fontSize: {
        pcxxs: [
          '0.563rem',
          {
            lineHeight: '0.875rem',
            fontWeight: '500'
          }
        ],
        pcxs: [
          '0.5rem',
          {
            lineHeight: '0.875rem',
            fontWeight: '500'
          }
        ],
        pc3xl: [
          '1.75rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '500'
          }
        ],
      },
      lineHeight: {
        7.25: '1.875rem',
        9.5: '2.375rem',
      },
      space: {
        7.5: '1.875rem',
        18: '4.5rem'
      },
      gap: {
        2.5: '0.625rem'
      },
      borderWidth: {
        0.25: '0.063rem',
        0.5: '0.125rem'
      },
      top: {
        23.5: '5.875rem',
        35: '8.75rem'
      },
      fontFamily: {
        pangmen: ['Pangmen']
      }
    }
  }
};
```