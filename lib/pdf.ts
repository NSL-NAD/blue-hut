'use client'

export async function exportProposalPDF() {
  const html2canvas = (await import('html2canvas')).default
  const jsPDF = (await import('jspdf')).default

  const sections = document.querySelectorAll('[data-section]')
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [1440, 900],
    compress: true,
  })

  for (let i = 0; i < sections.length; i++) {
    const el = sections[i] as HTMLElement

    // Store original styles
    const prevOverflow = el.style.overflow
    const prevHeight = el.style.height
    const prevMinHeight = el.style.minHeight

    // Temporarily expand for full capture
    el.style.overflow = 'visible'
    el.style.height = 'auto'
    el.style.minHeight = 'auto'

    const canvas = await html2canvas(el, {
      scale: 1.5,
      useCORS: true,
      backgroundColor: getComputedStyle(el).backgroundColor || '#0B0B1A',
      windowWidth: 1440,
      windowHeight: 900,
    })

    // Restore original styles
    el.style.overflow = prevOverflow
    el.style.height = prevHeight
    el.style.minHeight = prevMinHeight

    const imgData = canvas.toDataURL('image/jpeg', 0.92)

    // Calculate page dimensions based on content aspect ratio
    const contentWidth = 1440
    const contentHeight = Math.max(900, (canvas.height / canvas.width) * 1440)

    if (i > 0) {
      pdf.addPage([contentWidth, contentHeight], contentHeight > contentWidth ? 'portrait' : 'landscape')
    }

    pdf.addImage(imgData, 'JPEG', 0, 0, contentWidth, contentHeight)
  }

  pdf.save('blue-hut-proposal.pdf')
}
