import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { setupScrollAnimation, setupStaggeredAnimations } from "../lib/animations";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Refs for animation elements
  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const socialLinksRef = useRef(null);
  const formRef = useRef(null);
  const contactItemsRef = useRef(null);

  useEffect(() => {
    // Set up scroll animations
    if (headerRef.current) {
      setupScrollAnimation(headerRef.current, 'fadeInDown');
    }
    
    if (contactInfoRef.current) {
      setupScrollAnimation(contactInfoRef.current, 'fadeInLeft');
    }
    
    if (socialLinksRef.current) {
      setupScrollAnimation(socialLinksRef.current, 'fadeInLeft', 0.2);
    }
    
    if (formRef.current) {
      setupScrollAnimation(formRef.current, 'fadeInRight');
    }
    
    if (contactItemsRef.current) {
      setupStaggeredAnimations(contactItemsRef.current, 'fadeInUp', 0.15);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-background"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-ai rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-quantum rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-5xl md:text-7xl font leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]">Get In Touch</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with quantum and AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8" ref={contactInfoRef}>
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6" ref={contactItemsRef}>
                <div className="flex gap-4 items-start hover-lift">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:hello@zerokost.com" className="text-foreground/60 hover:text-accent transition-colors">hello@zerokost.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start hover-lift">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground/60 hover:text-accent transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start hover-lift">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-foreground/60">123 Innovation Drive, Tech Valley, CA 94000, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div ref={socialLinksRef}>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center transition-all duration-300 hover:bg-accent/10 hover-scale">
                  <Linkedin size={20} className="text-foreground/60 hover:text-accent" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center transition-all duration-300 hover:bg-accent/10 hover-scale">
                  <Twitter size={20} className="text-foreground/60 hover:text-accent" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center transition-all duration-300 hover:bg-accent/10 hover-scale">
                  <Github size={20} className="text-foreground/60 hover:text-accent" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
            <div className="relative p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover-border-glow">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors mb-4"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors mb-4"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors mb-4"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors mb-6 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                style={{
                  background: 'var(--gradient-ai)',
                  boxShadow: 'var(--glow-cyan-strong)'
                }}
                className="w-full px-6 py-3 rounded-lg font-semibold text-black hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
