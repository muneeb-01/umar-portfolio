import { useState } from "react"
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", project: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative mx-4 lg:mx-20">
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.2em]">
              Contact
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring precision to your next project? Let's discuss your
            requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need architectural drafting, mechanical drawings, or
                complete documentation packages, I'm here to help bring your
                vision to technical reality.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: FaEnvelope,
                  text: "contact@cadmaster.pro",
                  label: "Email",
                },
                { icon: FaPhone, text: "+1 (555) 123-4567", label: "Phone" },
                {
                  icon: FaMapMarkerAlt,
                  text: "Available Worldwide",
                  label: "Location",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border focus:border-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block bg-transparent text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border focus:border-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-border focus:border-primary outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm hover:bg-primary/90 transition-all glow-cyan flex items-center justify-center gap-2"
            >
              Send Message
              <FaPaperPlane size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
