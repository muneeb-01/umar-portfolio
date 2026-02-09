import {Button} from "./index" 
 export function Footer() {
  return (
    <footer className="py-8 px-2 md:px-20  bg-(--color-secondary) text-(--color-secondary-fg) rounded-t-(--card-border-radius) mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 gri space-y-5 md:space-y-0">
        <div className="flex flex-col justify-start items-center md:items-start">
          <h2 className="text-6xl tracking-tighter text-center md:text-left craftr1 mb-12">
            Ready to bring your <br /> <span className="italic Neue">ideas to life?</span>
          </h2>
          <Button dark={false}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <h3 className="text-xl font-medium mb-4 Founders">Work</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors Founders">
                  AutoCAD
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors Founders">
                  Engineering Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4 Founders">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors Founders">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors Founders">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors Founders">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm craftr4">
        © {new Date().getFullYear()} Umar Feroz. All rights reserved.
      </div>
    </footer>
  )
}
