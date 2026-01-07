import Image from "@/assets/images/landing_page.webp"

export function OurStory() {
  return (
    <section
      className="
      w-full
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      lg:px-8
    "
    >
      <div
        className="
        max-w-5xl
        mx-auto
        text-center
        flex
        flex-col
        items-center
        gap-6
      "
      >
        {/* Header */}
        <h1
          className="
          text-xl
          sm:text-2xl
          md:text-3xl
          font-extrabold
          tracking-tight
        "
        >
          Our Short Story
        </h1>

        {/* Paragraph */}
        <p
          className="
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          leading-relaxed
          sm:leading-loose
          opacity-90
          max-w-4xl
        "
        >
          From the heart of Pakistan,
          <InlineImage />
          we bring precision-driven CAD design to every project, partnering with
          the nation’s top engineering, construction, and manufacturing
          companies. Our journey began
          <InlineImage />
          with a mission to bridge local expertise with modern design workflows,
          transforming complex
          <InlineImage />
          ideas into accurate 2D and 3D technical drawings. By combining
          industry-standard AutoCAD practices with deep understanding of local
          building regulations, we help clients streamline their projects,
          reduce errors, and accelerate approvals.
        </p>
      </div>
    </section>
  )
}

/* Reusable Inline Image Component */
function InlineImage() {
  return (
    <span
      className="
      inline-flex
      items-center
      justify-center
      mx-1
      sm:mx-2
      align-middle
      overflow-hidden
      rounded-full
      w-[80px]
      h-[32px]
      sm:w-[100px]
      sm:h-[36px]
      md:w-[120px]
      md:h-[42px]
    "
    >
      <img src={Image} alt="CAD" className="w-full h-full object-cover" />
    </span>
  )
}
