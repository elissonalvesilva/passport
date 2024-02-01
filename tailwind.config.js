/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        gray: 'var(--color-gray)',
        lightYellow: 'var(--color-light-yellow)',
        typography: 'var(--color-typography-white)',
        'typography-black': 'var(--color-typography-black)',
        'typography-gray': 'var(--color-typography-gray)',
        // Tabs
        'bg-tab-active': 'var(--color-bg-tab-active)',
        'bg-tab-inactive': 'var(--color-bg-tab-inactive)',
        'border-tab-active': 'var(--color-border-tab-active)',
        'border-tab-inactive': 'var(--color-border-tab-inactive)',
        // Footer
        'bg-footer': 'var(--color-bg-footer)',
        'footer-tab-active': 'var(--color-footer-tab-active)',
        'footer-tab-inactive': 'var(--color-footer-tab-inactive)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
