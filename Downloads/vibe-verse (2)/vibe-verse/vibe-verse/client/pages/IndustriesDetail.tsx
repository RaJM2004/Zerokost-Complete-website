import { useParams, Link } from "react-router-dom";
import { industriesMapBySlug, industriesDropdownItems, slugify } from "@/shared/menuData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IndustriesDetail = () => {
  const { slug } = useParams();
  const data = slug ? industriesMapBySlug[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <Navbar />
        <div className="text-center mt-28 mt-4">
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground">We couldn't find that industry.</p>
          <Link to="/industries" className="mt-4 inline-block text-sm text-primary">Back to industries</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen py-16 pt-28 mt-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-md overflow-hidden shadow-lg mb-6">
            <img src={data.image} alt={data.label} className="w-full h-64 object-cover" />
          </div>

          <h1 className="text-3xl font-bold mb-4">{data.label}</h1>
          <p className="text-lg text-muted-foreground mb-6">{data.description} — We tailor solutions to meet regulatory, operational, and customer needs across this industry.</p>

          {data.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Focus areas</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {data.features.map((f: string, idx: number) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 mb-10">
            <Link to="/industries">
              <Button variant="outline">Back to industries</Button>
            </Link>
            <Link to="/contact" className="ml-auto">
              <Button>Contact us</Button>
            </Link>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Related industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industriesDropdownItems.filter(i => slugify(i.label) !== (slug || '')).slice(0,3).map((rel) => (
                <Link key={rel.label} to={`/industries/${slugify(rel.label)}`} className="block">
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

export default IndustriesDetail;
