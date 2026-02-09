import { Navbar, Footer } from "@/App/common/components"
import {
  MissionSection,
  SelectedWorkGrid,
  ServicesSection,
  WhyChooseSection,
  TestimonialsSection,
  WhoWeWorkWithSection,
  SkillsServicesSection,
  FAQAccordion,
} from "./components"

const Home = () => {
  return (
    <section className="min-h-screen relative space-y-8">
      <Navbar />
      <MissionSection />
      <WhyChooseSection />
      <SelectedWorkGrid />
      <ServicesSection />
      <TestimonialsSection />
      <WhoWeWorkWithSection />
      <SkillsServicesSection />
      <FAQAccordion />
      <Footer />
    </section>
  )
}
export default Home
