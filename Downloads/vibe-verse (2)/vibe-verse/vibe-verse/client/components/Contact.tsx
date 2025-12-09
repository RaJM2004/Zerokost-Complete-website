import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send, Clock, Globe, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration
    emailjs.send(
      "service_44qhlxn", // replace with your EmailJS service ID
      "template_fct13vz", // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "32yZnVZ4OgNOo6tGM" // replace with your EmailJS public key
    )
      .then(
        (result) => {
          alert("Thank you for your message! We'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Sorry, there was an error sending your message. Please try again later.");
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "1606B, 16th Floor, ORBIT, Plot No. 30/C,Sy No 83/1, Hyderabad Knowledge City, RaidurgPanmaktha, Serlingampally Mandal, Hyderabad,Telangana, India - 500081.",
      link: "#map"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 7893752462",
      link: "tel:+91 7893752462"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@zerokost.com",
      link: "mailto:info@zerokost.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#"
    },
    {
      icon: Globe,
      title: "Global Support",
      details: "Available in 20+ countries",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/ai-zk/", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-black text-foreground">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-quantum rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ai rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="relative z-10 w-full px-6">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-7xl font leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00ffff]">
            Contact Us
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="mx-auto max-w-7xl w-full bg-black/40 backdrop-blur-sm rounded-xl border border-border shadow-2xl overflow-hidden mb-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Left Side - Image and Info */}
            <div className="relative min-h-[350px] flex flex-col">
              <div className="h-full relative">
                <img
                  src="https://aurorealty.com/images/gallery/big/6big.jpg"
                  alt="Contact Us"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 rounded-t-xl lg:rounded-t-none lg:rounded-l-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] to-transparent backdrop-blur-sm"></div>
                <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 sm:mb-6 bg-gradient-ai bg-clip-text text-white">
                    Let's Connect
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-2 sm:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground text-xs sm:text-base">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-foreground/60 break-words max-w-[140px] sm:max-w-none leading-tight sm:leading-normal">{item.details}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 sm:mt-8">
                    <h4 className="font-medium text-foreground mb-2 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      {/* ...existing code for social links... */}
                      <a href="https://www.facebook.com/" target="_blank" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                        {/* ...svg... */}
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                        </svg>
                      </a>
                      <a href="https://www.twitter.com/ " target="_blank" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.014-.627.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/zerokostai" target="_blank" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/ai-zk/" target="_blank" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/@ZerokostHealthcare" target="_blank" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.615 3.184a2.999 2.999 0 0 0-2.117-2.118C15.871.667 12 .667 12 .667s-3.871 0-5.498.399A3.002 3.002 0 0 0 4.385 3.184C3.987 4.812 3.987 8.667 3.987 8.667s0 3.855.398 5.483a2.999 2.999 0 0 0 2.117 2.117c1.627.399 5.498.399 5.498.399s3.871 0 5.498-.399a3.002 3.002 0 0 0 2.117-2.117c.398-1.628.398-5.483.398-5.483s0-3.855-.398-5.483zM9.75 12.021V5.979l5.25 3.021-5.25 3.021z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-4 sm:p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4 sm:mb-6 bg-gradient-ai bg-clip-text text-transparent">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1 sm:mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-black/40 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1 sm:mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-black/40 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1 sm:mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-black/40 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1 sm:mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-border bg-black/40 text-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-gradient-ai hover:bg-gradient-ai/90 text-black font-medium py-4 sm:py-6 text-base sm:text-lg">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mx-auto max-w-7xl w-full bg-black/40 backdrop-blur-sm rounded-xl border border-border shadow-2xl overflow-hidden mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-ai bg-clip-text text-white">
              Our Location
            </h3>

            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-border">
              {/* Map iframe updated to Orbit by Auro Realty, Hyderabad */}
              <iframe
                src="https://www.google.com/maps?q=Orbit+by+Auro+Realty,+Hyderabad&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title="Orbit by Auro Realty, Hyderabad"
              ></iframe>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="https://www.google.com/maps/place/Orbit+by+Auro+Realty,+Hyderabad/@17.4346497,78.3741907,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93cfd19ae321:0x20f3cd74ba70af5d!8m2!3d17.4346446!4d78.3767656!16s%2Fg%2F11h0h_4dlr?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#00ffff]/40 text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all"
              >
                View on Google Maps
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M13 5h7v7h-2V8.41l-6.29 6.3-1.42-1.42L16.59 7H13V5z" /><path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-ai bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h3>
            <p className="text-foreground/60">Find quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-border p-6">
              <h4 className="text-lg font-medium mb-3">How can I get started with your services?</h4>
              <p className="text-foreground/60">Simply contact us through the form above or schedule a consultation call. Our team will guide you through the onboarding process.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-border p-6">
              <h4 className="text-lg font-medium mb-3">What industries do you specialize in?</h4>
              <p className="text-foreground/60">We work with clients across technology, finance, healthcare, education, and manufacturing sectors, providing tailored solutions.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-border p-6">
              <h4 className="text-lg font-medium mb-3">Do you offer custom solutions?</h4>
              <p className="text-foreground/60">Yes, we specialize in creating custom solutions tailored to your specific business needs and challenges.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-border p-6">
              <h4 className="text-lg font-medium mb-3">What support options are available?</h4>
              <p className="text-foreground/60">We provide 24/7 technical support, dedicated account managers, and comprehensive documentation for all our products.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="text-center relative rounded-2xl overflow-hidden p-12 m-5 border-2 border-[#00ffff]/30 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#0a1a2a]/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h3>
          <p className="text-xl text-foreground/70 mt-6 max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using our innovative solutions.
          </p>
          <button className="border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0e27] transition-all hover-scale hover-glow px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto">
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};


export default Contact;