'use client'
import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function Close() {
  const handleDownload = async () => {
    const { exportProposalPDF } = await import('@/lib/pdf')
    await exportProposalPDF()
  }

  return (
    <SectionWrapper sectionId="close" bg="deep">
      {/* Synthwave sun */}
      <div className="synthwave-sun" />

      {/* Synthwave grid floor */}
      <div className="synthwave-grid" />

      <div className="flex flex-col items-center justify-center text-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-headline mb-6 neon-text-pink"
        >
          Let&rsquo;s Build Something Good
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley Beach deserves a destination, not just a snack stand. This is
          the start of a conversation — and we think it&rsquo;s worth having.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Primary CTA — sunset gradient */}
          <motion.a
            href="mailto:nsquaredlifestyle@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
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

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 font-mono text-[0.65rem] tracking-wider"
          style={{ color: 'var(--text-dim)' }}
        >
          Confidential — For Discussion Purposes Only | N-Squared | March 2026
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
