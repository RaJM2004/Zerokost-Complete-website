import { Link } from "react-router-dom";
import { consultingDropdownItems, slugify } from "@/shared/menuData";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConsultingOverview = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen py-16 pt-28 mt-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Consulting Services</h1>
          <p className="text-muted-foreground mb-8">Explore our consulting services and how we help organisations design and deliver technology transformations.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingDropdownItems.map((item) => (
              <Link key={item.label} to={`/consulting/${slugify(item.label)}`} className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200 group-hover:scale-[1.01] transform">
                  <div>
                    <div className="overflow-hidden rounded-md mb-4">
                      <img src={item.image} alt={item.label} className="w-full h-40 object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    {item.features && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Typical outcomes</h4>
                        <ul className="text-xs text-muted-foreground grid grid-cols-1 gap-1">
                          {item.features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1"></span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <span className="text-sm border border-border px-3 py-2 rounded-md bg-transparent hover:bg-muted">Learn more</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultingOverview;
