import { useParams, Link } from "react-router-dom";
import { aboutMapBySlug, aboutDropdownItems, slugify } from "@/shared/menuData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutDetail = () => {
  const { slug } = useParams();
  const data = slug ? aboutMapBySlug[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <Navbar />
        <div className="text-center mt-28">
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground">We couldn't find that page.</p>
          <Link to="/about" className="mt-4 inline-block text-sm text-primary">
            Back to about
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen py-16 pt-28 mt-4">
        <div className="max-w-5xl mx-auto px-4">
          {/* Hero Image */}
          <div className="rounded-md overflow-hidden shadow-lg mb-8">
            <img
              src={data.image}
              alt={data.label}
              className="w-full h-72 object-cover"
            />
          </div>

          {/* Title and Intro */}
          <h1 className="text-4xl font-bold mb-4">{data.label}</h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {data.description}
          </p>

          {/* Additional Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              At <span className="font-medium">{data.label}</span>, we focus on
              delivering innovation, precision, and sustainability in every
              project. Our approach combines technology-driven insights with
              human creativity, ensuring that every solution we build has a
              meaningful impact. We strive to foster collaboration and continuous
              improvement across all our operations and partnerships.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations and individuals through intelligent
                solutions that enhance efficiency, connectivity, and growth —
                making technology accessible, scalable, and impactful.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a global leader in digital transformation and
                innovation, helping businesses navigate the future with
                confidence through ethical AI and sustainable technology.
              </p>
            </div>
          </section>

          {/* Values / Highlights */}
          {data.features && (
            <section className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Core Values & Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
                {data.features.map((f: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-card p-3 rounded-md border border-border hover:shadow transition"
                  >
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Quote / Statement */}
          <div className="my-12 bg-primary/10 border-l-4 border-primary p-6 rounded-md text-center">
            <p className="text-lg italic text-foreground">
              “Innovation is not just about technology — it’s about creating a
              better way forward for everyone.”
            </p>
            <p className="mt-2 text-sm text-muted-foreground">– {data.label} Team</p>
          </div>

          {/* Goals / Focus Areas */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Key Focus Areas</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "AI-driven solutions for automation",
                "Data-driven decision support",
                "Sustainable technology design",
                "Seamless customer experience",
                "Continuous learning & innovation",
                "Ethical and transparent growth"
              ].map((goal, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="text-lg font-medium mb-2">{goal}</div>
                  <p className="text-sm text-muted-foreground">
                    We are committed to advancing in this area through research,
                    collaboration, and impactful initiatives.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Buttons */}
          <div className="flex gap-3 mb-10">
            <Link to="/about">
              <Button variant="outline">Back to about</Button>
            </Link>
            <Link to="/contact" className="ml-auto">
              <Button>Contact us</Button>
            </Link>
          </div>

          {/* Related Pages */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Related pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aboutDropdownItems
                .filter((i) => slugify(i.label) !== (slug || ""))
                .slice(0, 3)
                .map((rel) => (
                  <Link
                    key={rel.label}
                    to={`/about/${slugify(rel.label)}`}
                    className="block"
                  >
                    <div className="p-4 rounded-md border border-border hover:shadow-lg transition-shadow bg-card">
                      <img
                        src={rel.image}
                        alt={rel.label}
                        className="w-full h-28 object-cover rounded mb-3"
                      />
                      <div className="text-sm font-medium mb-1">{rel.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {rel.description}
                      </div>
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

export default AboutDetail;
