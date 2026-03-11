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
        'bg-deep': 'var(--bg-deep)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'neon-pink': 'var(--neon-pink)',
        'neon-cyan': 'var(--neon-cyan)',
        'neon-yellow': 'var(--neon-yellow)',
        'neon-orange': 'var(--neon-orange)',
        'neon-purple': 'var(--neon-purple)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        '6xl': '1140px',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255,45,123,0.3), 0 0 60px rgba(255,45,123,0.1)',
        'neon-cyan': '0 0 20px rgba(0,240,255,0.3), 0 0 60px rgba(0,240,255,0.1)',
        'glass': '0 4px 30px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
