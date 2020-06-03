module.exports = {
  theme: {
    extend: {
      fontFamily: {
        foo: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
        bar: "Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
      },
      colors: {
          'brand-accent': '#00CEAE',
          'brand-dark': '#0A192F',
          'brand-light': '#172A45'
      },
      fontSize: {
        '7xl': '5rem',
      }
    }
  },
  purge: {
  
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'App.vue',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  variants: {},
  plugins: []
}
