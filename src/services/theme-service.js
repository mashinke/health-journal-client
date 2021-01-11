const ThemeService = {
  getTheme() {
    // This is a placeholder until themes are implemented in the back end.
    return {
      primary: {
        'light': '#fef3f5',
        'medium': '#fbdae0',
        'dark': '#f7b6c2',
        'verydark': '#da6278',
        'text': '#614051'
      },
      secondary: {
        'light': '#eefaf6',
        'medium': '#c3eefd',
        'dark': '#9cd3c2',
        'verydark': '#459a80',
        'text': '#064b37'
      }
    }
  }
}

export default ThemeService;