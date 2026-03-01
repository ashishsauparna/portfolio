'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] flex justify-center py-6">
      <div className="w-full flex flex-col items-center gap-14 xl:gap-[72px]">
        <div className="relative token-container pt-12 flex flex-col gap-8 xl:gap-0">
          <div className="flex flex-col gap-8">
            <h2 className="token-heading-footer text-black w-[228px]">
              Interested in working together?
            </h2>

            <div className="flex items-center gap-1">
              <a
                href="mailto:ashishsauparna@gmail.com"
                className="token-link text-black hover:underline"
              >
                ashishsauparna@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-[17px] xl:absolute xl:top-1 xl:right-0">
            <div className="flex flex-col items-start gap-0">
              <a
                href="https://www.figma.com/@ashishsauparna"
                target="_blank"
                rel="noopener noreferrer"
                className="token-link text-black hover:underline"
              >
                Figma Community
              </a>
              <p className="token-caption-md text-black">(Free Plugin &amp; UX resources)</p>
            </div>

            <a
              href="https://www.linkedin.com/in/ashishsauparna/"
              target="_blank"
              rel="noopener noreferrer"
              className="token-link text-black hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="https://ashishsauparna.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="token-link text-black hover:underline"
            >
              Medium
            </a>
          </div>
        </div>

        <div className="token-container py-3">
          <p className="token-meta text-black">
            © Assembled with pixels by Ashish. Last updated Jan 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
