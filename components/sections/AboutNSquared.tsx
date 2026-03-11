'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const people = [
  {
    name: 'Nic DeMore',
    initials: 'ND',
    bio: 'Local business owner running a digital marketing agency in the Third Ward (Margle Media, est. 2017). Background in web development, digital design, event planning, and hospitality. Passionate about food, community, and bringing people together.',
    links: [
      { label: 'nicdemore.com', href: 'https://nicdemore.com' },
      { label: 'marglemedia.com', href: 'https://marglemedia.com' },
      { label: 'goodatscale.studio', href: 'https://goodatscale.studio' },
      { label: 'foacourse.com', href: 'https://foacourse.com' },
    ],
  },
  {
    name: 'Natasha',
    initials: 'N',
    bio: 'Lawyer and insurance advisor from Canada with experience running her own firm. Currently getting licensed in the States. Background in customer service, hospitality, and event planning. Shares a passion for food, community, and creating vibrant gathering spaces.',
    links: [
      { label: 'nicdemore.com', href: 'https://nicdemore.com' },
      { label: 'marglemedia.com', href: 'https://marglemedia.com' },
      { label: 'goodatscale.studio', href: 'https://goodatscale.studio' },
      { label: 'foacourse.com', href: 'https://foacourse.com' },
    ],
  },
]

export default function AboutNSquared() {
  return (
    <SectionWrapper sectionId="about" bg="deep">
      {/* Ambient purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(176,38,255,0.06) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline">
          About N-Squared
        </h2>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {people.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-glass flex flex-col items-center text-center"
          >
            {/* Avatar with gradient border ring */}
            <div
              className="w-24 h-24 rounded-full mb-5 flex items-center justify-center"
              style={{
                background: 'var(--gradient-sunset)',
                padding: '3px',
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-elevated)' }}
              >
                <span
                  className="font-display text-2xl font-bold"
                  style={{ color: 'var(--neon-pink)', opacity: 0.7 }}
                >
                  {person.initials}
                </span>
              </div>
            </div>

            <h3 className="font-display text-xl font-bold mb-3">
              {person.name}
            </h3>
            <p
              className="font-body text-sm leading-relaxed mb-5"
              style={{ color: 'var(--text-secondary)' }}
            >
              {person.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {person.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs opacity-70 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--neon-cyan)' }}
                >
                  <ExternalLink size={10} />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
