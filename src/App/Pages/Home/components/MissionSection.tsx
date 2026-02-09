import { ModelViewer } from "./ModelViewer"
export function MissionSection() {
  return (
    <section className=" mx-auto px-6 lg:px-12 mt-16 relative z-10 bg-(--color-paper-fg) rounded-(--card-border-radius) overflow-hidden">
      <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center min-h-[80vh]">
        <div className="h-full flex items-end ">
          <div className="space-y-8 lg:space-y-10 py-10">
            <div className="reveal">
              <span className="inline-block border bg-gray-300 border-(--color-paper) px-6 py-2.5 rounded-(--card-border-radius) text-sm font-medium tracking-wide uppercase backdrop-blur-sm cursor-default">
                Our Mission
              </span>
            </div>

            <div className="">
              <h1 className="headline font-display wrap-normal text-5xl lg:text-6xl font-normal tracking-tight leading-tight lg:leading-[1.1]">
                Designing for <span className="italic Neue">results</span>.
              </h1>
            </div>

            <div className="flex flex-wrap gap-6 text-sm opacity-80 font-medium tracking-wide">
              <span className="category-tag pb-1 cursor-default">WEB</span>
              <span className="category-tag pb-1 cursor-default">|</span>
              <span className="category-tag pb-1 cursor-default">BRANDING</span>
              <span className="category-tag pb-1 cursor-default">|</span>
              <span className="category-tag pb-1 cursor-default">UX/UI</span>
            </div>

            <div className="">
              <p className=" leading-relaxed max-w-xl text-balance">
                Jules Studio is an independent design studio focused on
                designing digital products that are elegant and intuitive to
                help you accomplish your business goals.
              </p>
            </div>

            <div className="">
              <button className="group relative px-8 py-4 text-sm rounded-full bg-(--color-secondary) text-(--color-paper-fg) font-medium md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="relative  lg:pr-18">
          <div className="image-container  aspect-4/5 ">
            <div className="w-full h-full flex items-center justify-center">
              <ModelViewer />
              {/* <div className="text-center ">
                <svg
                  className="w-24 h-24 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm font-medium">Professional Portrait</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:top-0 left-1/2 -translate-1/2 w-150 h-150 opacity-30 top-full bg-[#E2897A]  rounded-full blur-[8rem]"></div>
    </section>
  )
}
