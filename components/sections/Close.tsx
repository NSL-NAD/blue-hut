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
    <SectionWrapper sectionId="close" bg="dark">
      <div className="flex flex-col items-center justify-center text-center h-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-section-headline mb-6 glow-teal"
        >
          Let&rsquo;s Build Something Good
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-base md:text-lg leading-relaxed opacity-80 max-w-xl mb-10"
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
          {/* Email CTA */}
          <motion.a
            href="mailto:nsquaredlifestyle@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 font-mono text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              borderColor: 'var(--border-pop)',
              color: 'var(--neon-teal)',
            }}
          >
            <Mail size={16} />
            Get in Touch
          </motion.a>

          {/* PDF Download CTA */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 font-mono text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              borderColor: 'var(--border-pop)',
              color: 'var(--neon-teal)',
            }}
          >
            <Download size={16} />
            Download Proposal
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 font-mono text-[0.65rem] tracking-wider"
        >
          Confidential — For Discussion Purposes Only | N-Squared | March 2026
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
