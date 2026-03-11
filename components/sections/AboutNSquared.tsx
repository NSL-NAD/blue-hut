'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const people = [
  {
    name: 'Nic DeMore',
    initials: 'ND',
    bio: 'Local business owner running a digital marketing agency in the Third Ward (Margle Media, est. 2017). Background in web development, digital design, event planning, and hospitality. Passionate about food, community, and bringing people together — drawing inspiration from travels around the world.',
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
    bio: 'Lawyer and insurance advisor from Canada with experience running her own firm. Currently getting licensed in the States. Background in customer service, hospitality, and event planning. Shares a passion for food, community, and creating vibrant gathering spaces inspired by global travel.',
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
    <SectionWrapper sectionId="about" bg="accent">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="font-display text-headline">
          About N-Squared
        </h2>
        <div className="geo-stripe w-20 mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {people.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-pop flex flex-col items-center text-center"
          >
            {/* Photo placeholder */}
            <div
              className="w-24 h-24 rounded-2xl mb-4 flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-accent)',
                border: '3px solid var(--border-pop)',
              }}
            >
              <span className="font-display text-2xl" style={{ color: 'var(--accent-1)', opacity: 0.5 }}>
                {person.initials}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-2">
              {person.name}
            </h3>
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {person.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {person.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs hover:opacity-100 opacity-70 transition-opacity"
                  style={{ color: 'var(--accent-2)' }}
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
