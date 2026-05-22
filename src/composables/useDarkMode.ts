import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  const updateDarkMode = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('theme')

    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      isDark.value = prefersDark
    }

    applyTheme(isDark.value)
  }

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      html.style.colorScheme = 'dark'
    } else {
      html.classList.remove('dark')
      html.style.colorScheme = 'light'
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  onMounted(() => {
    updateDarkMode()
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const stored = localStorage.getItem('theme')
      if (!stored) {
        updateDarkMode()
      }
    }
    mediaQuery.addEventListener('change', handleChange)
  })

  return { isDark, toggleTheme }
}

