'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function Overview() {
  return (
    <SectionWrapper sectionId="overview" bg="light">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        {/* Headline — Left column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <h2 className="font-display text-section-headline">
            What We&rsquo;re Proposing
          </h2>
        </motion.div>

        {/* Body — Right column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-3"
        >
          <p className="font-body text-base md:text-lg leading-relaxed mb-6">
            McKinley Beach&rsquo;s existing concession stand &mdash; affectionately
            dubbed the &ldquo;Blue Hut&rdquo; &mdash; represents an untapped opportunity.
            Currently underutilized, the structure sits steps from one of
            Milwaukee&rsquo;s most beloved lakefront destinations. We&rsquo;re proposing
            a collaborative renovation and operation model that activates the
            space year-round, generates revenue for all parties, and builds
            something the community genuinely loves.
          </p>

          <p className="font-mono text-[0.7rem] italic opacity-50">
            For discussion purposes only. All terms and structures presented
            herein are preliminary and subject to negotiation.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
