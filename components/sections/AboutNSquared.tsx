'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'

const photos = [
  { src: '/n-squared-001.jpeg', alt: 'N-Squared photo 1' },
  { src: '/n-squared-002.JPG', alt: 'N-Squared photo 2' },
  { src: '/n-squared-003.JPG', alt: 'N-Squared photo 3' },
]

const links = [
  { label: 'nicdemore.com', href: 'https://nicdemore.com' },
  { label: 'marglemedia.com', href: 'https://marglemedia.com' },
  { label: 'goodatscale.studio', href: 'https://goodatscale.studio' },
  { label: 'foacourse.com', href: 'https://foacourse.com' },
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

      {/* Star field */}
      <div className="star-field" />

      {/* Dot grid accents */}
      <div className="dot-grid" style={{ top: '6%', right: '4%', width: '144px', height: '96px' }} />
      <div className="dot-grid-pink" style={{ bottom: '10%', left: '3%', width: '96px', height: '72px' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline">
          About N-Squared
        </h2>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* Single combined bio card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="card-glass max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        {/* Three photos in a horizontal row */}
        <div className="flex gap-4 md:gap-5 justify-center mb-8 w-full">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="relative rounded-2xl overflow-hidden flex-1 max-w-[200px]"
              style={{
                aspectRatio: '4/5',
                background: 'var(--gradient-sunset)',
                padding: '3px',
              }}
            >
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 200px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="font-display text-2xl font-bold mb-4">
          Nic &amp; Natasha
        </h3>
        <p
          className="font-body text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Nic is a local business owner running a digital marketing agency in the Third Ward
          (Margle Media, est. 2017) with a background in web development, digital design, event
          planning, and hospitality. Natasha is a lawyer and insurance advisor from Canada with
          experience running her own firm, currently getting licensed in the States, with deep roots
          in customer service, hospitality, and event planning. Together, they share a passion for
          food, community, and creating vibrant gathering spaces — drawing inspiration from
          travels around the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)] transition-all duration-200"
              style={{ color: 'var(--neon-cyan)' }}
            >
              <ExternalLink size={10} />
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
