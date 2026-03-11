import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        'bg-card-alt': 'var(--bg-card-alt)',
        'text-primary': 'var(--text-primary)',
        'text-on-light': 'var(--text-on-light)',
        'neon-teal': 'var(--neon-teal)',
        'neon-pink': 'var(--neon-pink)',
        'neon-yellow': 'var(--neon-yellow)',
        'neon-orange': 'var(--neon-orange)',
        'border-pop': 'var(--border-pop)',
        'highlight': 'var(--highlight)',
        'toggle-bg': 'var(--toggle-bg)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '5xl': '1024px',
      },
    },
  },
  plugins: [],
};
export default config;
