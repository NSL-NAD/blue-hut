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
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-headline mb-6 text-white"
        >
          Let&rsquo;s Build Something Good
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-10 text-white/80"
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
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-sm uppercase tracking-wider transition-all duration-200 text-white"
            style={{
              backgroundColor: 'var(--accent-1)',
            }}
          >
            <Mail size={18} />
            Get in Touch
          </motion.a>

          {/* PDF Download CTA */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 font-mono text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
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
          className="mt-16 font-mono text-[0.65rem] tracking-wider text-white/40"
        >
          Confidential — For Discussion Purposes Only | N-Squared | March 2026
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
