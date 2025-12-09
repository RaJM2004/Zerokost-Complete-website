import { useParams, Link } from "react-router-dom";
import { aiMapBySlug, slugify, aiDropdownItems } from "@/shared/menuData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIDetail = () => {
  const { slug } = useParams();
  const data = slug ? aiMapBySlug[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <Navbar />
        <div className="text-center mt-28 mt-4">
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground">We couldn't find that AI solution.</p>
          <Link to="/ai" className="mt-4 inline-block text-sm text-primary">Back to AI solutions</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen py-16 pt-28 mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-md overflow-hidden shadow-lg mb-6">
            <img src={data.image} alt={data.label} className="w-full h-64 object-cover" />
          </div>

          <h1 className="text-3xl font-bold mb-4">{data.label}</h1>
          <p className="text-lg text-muted-foreground mb-6">{data.description} — Our team provides enterprise-ready implementations, integration, and managed services so your organization can scale AI safely and quickly.</p>

          {data.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Key features</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {data.features.map((f: string, idx: number) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Extended content: Use cases and How it works */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Typical use cases</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-3"><span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>Automate repetitive business workflows to free up human time for high-value work.</li>
                <li className="flex items-start gap-3"><span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>Enhance customer experiences with personalized recommendations and automated support.</li>
                <li className="flex items-start gap-3"><span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>Improve decision-making with predictive analytics and anomaly detection.</li>
                <li className="flex items-start gap-3"><span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2"></span>Accelerate product development using AI-assisted code and content generation.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">How it works</h4>
              <p className="text-sm text-muted-foreground mb-3">We combine domain expertise, prebuilt integrations, and custom model development to deliver solutions that plug into your existing systems. Typical engagements include discovery, prototype, pilot, and production phases with monitoring and governance baked in.</p>

              <div className="bg-zinc-900/40 p-4 rounded-md">
                <h5 className="text-sm font-medium mb-2">Engagement highlights</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>Fast prototyping (2-6 weeks)</li>
                  <li>Enterprise integrations (SAP, CRMs, data lakes)</li>
                  <li>Responsible AI reviews & compliance</li>
                  <li>Operationalization & SRE support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-10">
            <Link to="/ai">
              <Button variant="outline">Back to all AI solutions</Button>
            </Link>
            <Link to="/contact" className="ml-auto">
              <Button>Contact us about this</Button>
            </Link>
          </div>

          {/* Related solutions */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Related solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiDropdownItems.filter(i => slugify(i.label) !== (slug || '')).slice(0,3).map((rel) => (
                <Link key={rel.label} to={`/ai/${slugify(rel.label)}`} className="block">
                  <div className="p-4 rounded-md border border-border hover:shadow-lg transition-shadow bg-card">
                    <img src={rel.image} alt={rel.label} className="w-full h-28 object-cover rounded mb-3" />
                    <div className="text-sm font-medium mb-1">{rel.label}</div>
                    <div className="text-xs text-muted-foreground">{rel.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIDetail;
