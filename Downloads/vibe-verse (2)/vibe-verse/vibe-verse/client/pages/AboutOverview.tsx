import { Link } from "react-router-dom";
import { aboutDropdownItems, slugify } from "@/shared/menuData";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutOverview = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen py-16 pt-28 mt-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-muted-foreground mb-8">Learn about our mission, vision, team and the way we work.</p>

          {/* Company Information Section */}
          <div className="mb-12 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6">Company Profile</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Corporate Information</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Company Name:</span> ZEROKOST HEALTHCARE PRIVATE LIMITED</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">CIN:</span> U46497TS2023PTC172499</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Date of Incorporation:</span> April 29, 2023</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Status:</span> Active</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Company Type:</span> Private Limited Company</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Category:</span> Company limited by shares</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Sub-Category:</span> Non-govt company</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Email:</span> info@zerokost.com</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Address:</span> PLOT NO.84-85, FLAT NO.104, SIVA SAI HEIGHTS, GOKUL PLOTS, Kukatpally, Hyderabad, Tirumalagiri, Telangana, India, 500072</p>
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">RoC:</span> Hyderabad</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="text-xl font-semibold mb-4">Directors</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">• ASHWIN KUMAR THIRUKKOVALURI SRINIVASA</p>
                  <p className="text-muted-foreground">• ANANYA PARIKIBANDLA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutDropdownItems.map((item) => (
              <Link key={item.label} to={`/about/${slugify(item.label)}`} className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200 group-hover:scale-[1.01] transform">
                  <div>
                    <div className="overflow-hidden rounded-md mb-4">
                      <img src={item.image} alt={item.label} className="w-full h-40 object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    {item.features && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Highlights</h4>
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

export default AboutOverview;
