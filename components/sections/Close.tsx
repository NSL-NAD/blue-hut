'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Download } from 'lucide-react'

export default function Close() {
  const handleDownload = async () => {
    const { exportProposalPDF } = await import('@/lib/pdf')
    await exportProposalPDF()
  }

  const h2Ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(h2Ref, { once: true, amount: 0.5 })

  return (
    <div
      data-section="close"
      className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--text-primary)' }}
    >
      {/* Star field */}
      <div className="star-field" />

      {/* Dot grid accents */}
      <div className="dot-grid" style={{ top: '8%', left: '5%', width: '120px', height: '96px' }} />
      <div className="dot-grid-pink" style={{ top: '10%', right: '5%', width: '96px', height: '72px' }} />

      {/* Content — flex-1 fills all space above the sun; paddingBottom reserves sun height + gap */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center relative z-20 px-6 md:px-12"
        style={{ paddingBottom: 'calc(260px + 40px)' }}
      >
        <h2
          ref={h2Ref}
          className="font-display text-headline mb-6"
          style={{
            color: 'var(--neon-pink)',
            opacity: isInView ? undefined : 0,
            animation: isInView ? 'neon-flicker 2s ease-in forwards' : 'none',
          }}
        >
          Let&rsquo;s Build
          <span className="block">Something Good</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley Beach deserves a destination, not just a snack stand. This is
          the start of a conversation — and we think it&rsquo;s worth having.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Primary CTA — sunset gradient */}
          <motion.a
            href="mailto:nsquaredlifestyle@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl font-mono text-sm uppercase tracking-wider text-white transition-all duration-200"
            style={{
              background: 'var(--gradient-sunset)',
              boxShadow: 'var(--shadow-pink)',
            }}
          >
            <Mail size={18} />
            Get in Touch
          </motion.a>

          {/* Secondary CTA — cyan outline */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl font-mono text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              border: '1px solid rgba(0,240,255,0.4)',
              color: 'var(--neon-cyan)',
              background: 'transparent',
              boxShadow: '0 0 15px rgba(0,240,255,0.08)',
            }}
          >
            <Download size={18} />
            Download Proposal
          </motion.button>
        </motion.div>
      </div>

      {/* Footer — pinned just above the sun */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-0 right-0 z-20 text-center font-mono text-[0.65rem] tracking-wider"
        style={{ bottom: 'calc(260px + 12px)', color: 'var(--text-dim)' }}
      >
        Confidential — For Discussion Purposes Only | N-Squared | March 2026
      </motion.p>

      {/* Sun atmospheric glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,45,123,0.18) 0%, rgba(255,107,45,0.08) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 4,
          filter: 'blur(20px)',
        }}
      />

      {/* Enhanced synthwave sun — full half-circle flush to bottom edge, no padding */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '520px',
          height: '260px',
          borderRadius: '520px 520px 0 0',
          zIndex: 5,
          background: 'linear-gradient(180deg, #FF2D7B 0%, #FF6B2D 45%, #FFD600 100%)',
          overflow: 'hidden',
          pointerEvents: 'none',
          boxShadow: `
            0 0 60px rgba(255, 45, 123, 0.6),
            0 0 120px rgba(255, 45, 123, 0.35),
            0 0 200px rgba(255, 107, 45, 0.2),
            0 0 300px rgba(255, 214, 0, 0.1)
          `,
        }}
      >
        {/* CRT scan lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 10px, rgba(11,11,26,0.55) 10px, rgba(11,11,26,0.55) 13px)',
          }}
        />
        {/* Inner glow at top of sun */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '60%',
            background: 'radial-gradient(ellipse, rgba(255,255,200,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Enhanced synthwave grid floor */}
      <div className="synthwave-grid" />
    </div>
  )
}
