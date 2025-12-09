import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Defence() {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16 mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Safeguarding National Security: QNu Implements 300KM Quantum-Secure Network for Unbreakable Video Transmission for Defense Organization</h1>
            <p className="mb-6 text-lg text-muted-foreground">QNu implements a 300km secure link for defense using a multi-hop network of trusted nodes. This provides unbreakable, quantum-safe encryption for critical real-time video feeds, ensuring national security communications are protected.</p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg"
            >
              Request a demo
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://cdn.prod.website-files.com/65093b9aec214a97237b7f5e/6512b5665698d2be14dbbdf9_65009dbba414e0f05bd98900_Military-Quantum-Computing.jpeg" alt="Quantum Secure Shield" className="rounded-xl shadow-lg w-full max-w-md" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">About the Client</h2>
            <p className="mb-4 text-muted-foreground">The client is a <span className="font-semibold">defense organization</span> responsible for border surveillance and national security operations. With an extensive network of high-stakes intelligence transmission, the organization requires absolute encryption security to safeguard critical <span className="font-semibold">video surveillance</span> and <span className="font-semibold">real-time defense communications</span>.</p>
            <h3 className="font-semibold mb-2">Key Facts</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><span className="font-semibold">Surveillance Infrastructure:</span> Covers strategic military zones across multiple locations.</li>
              <li><span className="font-semibold">Video Data Transmission:</span> Large-scale high-definition video feeds, requiring uncompromised encryption.</li>
              <li><span className="font-semibold">Security Standards:</span> Compliance with military-grade encryption frameworks to future-proof operations against quantum cyber threats.</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Challenges Faced</h2>
            <ul className="list-decimal pl-5 space-y-2 text-base">
              <li><span className="font-semibold">Nation-State Threats:</span> Increasing global cybersecurity threats, including eavesdropping and cyber espionage.</li>
              <li><span className="font-semibold">Quantum & AI Vulnerabilities:</span> Traditional encryption methods at risk from next-gen quantum and AI-driven attacks.</li>
              <li><span className="font-semibold">Confidential Border Operations:</span> High confidentiality requirements for real-time surveillance data transfer.</li>
              <li><span className="font-semibold">Integration Complexity:</span> Need for a scalable, non-disruptive quantum security deployment without impacting ongoing missions.</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Strategic Mission for Quantum Security Adoption</h2>
          <p className="mb-4 text-base">With the rising urgency to safeguard military communications, the client sought cutting-edge, future-safe encryption—a solution stronger than classical cybersecurity methods. The goal was to establish a 300KM quantum-secure network, ensuring unbreakable security for video transmission and defense intelligence exchange.</p>
          <p className="mb-4 text-base">Sensitive border surveillance video transmission demands absolute security to protect national defense operations from evolving cyber threats. Conventional encryption is increasingly vulnerable to quantum attacks and AI-driven decryption methods, making legacy security solutions inadequate for long-term protection.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Why Is This a Problem?</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li><span className="font-semibold">Highly Sensitive National Security Data</span> – Confidential defense intelligence must remain secure.</li>
            <li><span className="font-semibold">Quantum & AI Threats</span> – Future quantum computers and advanced AI models will break traditional encryption methods.</li>
            <li><span className="font-semibold">Border Surveillance Demands Confidentiality</span> – Uninterrupted, tamper-proof communication is mission-critical.</li>
            <li><span className="font-semibold">Large Video Data Volumes</span> – Military-grade critical and high-volume, rapid, secure transmission.</li>
            <li><span className="font-semibold">Evolving AI Attacks</span> – AI models are getting increasingly adept at predicting encryption keys.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">QNu Labs: The Quantum-Safe Security Solution</h2>
          <h3 className="font-semibold mb-2">Solutions Implemented:</h3>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li><span className="font-semibold">Innovative Quantum Encryption Deployment</span> – Cutting-edge, scalable quantum communication system, ensuring unconditional security against cyber threats.</li>
            <li>Two 150Km point to point QKD Systems – Economical, scalable architecture ensuring long-distance security.</li>
            <li>Trusted Nodes for Extended Security – Strategically placed nodes enabled seamless quantum encryption across 300KM.</li>
            <li>Military-Grade Hardened QKD Devices – Tamper Proof QKD boxes built for robust security, ensuring field readiness for defense applications.</li>
            <li>Comprehensive Training & SOPs – Provided defense teams with full control for operational self-sufficiency.</li>
            <li>Zero-Disruption Expansion – Scalable deployment designed to integrate effortlessly with future expansion plans.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">QNu Differentiators:</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Among the First Global Quantum-Safe Deployments – Pioneer in large-scale military quantum encryption.</li>
            <li>Layered Security Architecture – Delivers security at multiple layers besides delivering Information theoretical secure communication.</li>
            <li>Trusted Node-Based Expansion – Ensures long-distance encryption with layered security measures.</li>
            <li>Military-Hardened QKD Devices – Built for battlefield durability and mission-critical defense applications.</li>
            <li>Self-Sufficiency Training & SOP Implementation – Defense teams empowered to manage and operate quantum-secure communication independently.</li>
            <li>Scalable Beyond 1000KM Network Length – Designed for nationwide defense communication security.</li>
            <li>Crypto-Agile for Future Quantum-Safe Compliance – Supports continuous upgrades without requiring complete system overhaul.</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Results Achieved:</h2>
          <ul className="list-disc pl-5 space-y-2 text-base">
            <li>Among the First Quantum-Safe Defense Deployments Globally</li>
            <li>300KM Operational Quantum-Secure Network – Fortifying defense communications</li>
            <li>Connected 10 Critical Military Assets – Enabling tamper-proof defense intelligence exchange over already laid optical fiber</li>
            <li>Future-Safe & Unconditional Security – Immune to several quantum computing attacks</li>
          </ul>
        </div>

        <div className="mb-12 flex gap-4">
          <Button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg"
          >
            Request a demo
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
