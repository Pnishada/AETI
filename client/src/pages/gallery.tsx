import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gallery() {
  const galleryItems = [
    { image: "src/components/assets/Students_projects.webp", caption: "Students collaborating on engineering projects" },
    { image: "src/components/assets/training_workshop.webp", caption: "Advanced technical training workshop" },
    { image: "src/components/assets/lab_training_session.webp", caption: "Modern computer lab training session" },
    { image: "src/components/assets/training_program.webp", caption: "Hospitality training program" },
    { image: "src/components/assets/graduation_ceremony.webp", caption: "Apprenticeship graduation ceremony" },
    { image: "src/components/assets/training_facility.webp", caption: "Industrial training facility" },
    { image: "src/components/assets/skills_development_workshop.webp", caption: "Vocational skills development workshop" },
    { image: "src/components/assets/Healthcare_training.webp", caption: "Healthcare training program" },
    { image: "src/components/assets/training_center_building.webp", caption: "IETI training center building" }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Explore our comprehensive collection showcasing IETI's training programs, 
              educational events, student achievements, and state-of-the-art facilities 
              across our nationwide training centers.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="mt-4 text-slate-700 font-medium text-center leading-relaxed">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
