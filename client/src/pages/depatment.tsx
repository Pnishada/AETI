import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Departments() {
  const departments = [
    {
      name: "Mechanical Engineering",
      description: "Focuses on machinery, manufacturing processes, and maintenance skills.",
      head: "Dr. Ruwan Perera",
      contact: "011-2345678",
      image: "src/components/assets/Mechanical_Eng_img.jpg"
    },
    {
      name: "Electrical & Electronics Engineering",
      description: "Training in electrical systems, circuits, automation, and industrial electronics.",
      head: "Eng. Malini Fernando",
      contact: "011-9876543",
      image: "src/components/assets/Electrical_Eng_img.jpg"
    },
    {
      name: "Civil Engineering & Construction",
      description: "Skills in building design, construction management, and infrastructure projects.",
      head: "Eng. Nimal Jayasinghe",
      contact: "011-5566778",
      image: "src/components/assets/Civil_Eng_img.jpg"
    },
    {
      name: "Automotive Engineering",
      description: "Vehicle mechanics, diagnostics, and maintenance training.",
      head: "Eng. Sandun Perera",
      contact: "011-6677889",
      image: "src/components/assets/Automotive_Eng_img.jpg"
    }
  ];

  const collaborations = [
    {
      name: "Institute of Engineering Technology (IET)",
      logo: "src/components/assets/IET_Logo.png",
      description: "Provides professional engineering and technical education.",
      link: "https://iet.edu.lk/",
    },
    {
      name: "AETI – Orugodawatta",
      logo: "src/components/assets/AETI_Logo.jpg",
      description: "Advanced training and technical education at Orugodawatta.",
      link: "https://iet.edu.lk/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-slate-900">
            IETI Departments
          </h1>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            IETI offers specialized departments dedicated to practical and industry-relevant training, developing skilled professionals for modern industries.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={`${dept.name}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-slate-900">{dept.name}</h2>
                  <p className="text-slate-600 mb-2 leading-relaxed">{dept.description}</p>
                  <p className="text-sm text-slate-500 mb-2"><span className="font-medium text-slate-700">Head:</span> {dept.head}</p>
                  <p className="text-sm text-slate-500 mb-4"><span className="font-medium text-slate-700">Contact:</span> {dept.contact}</p>
                  <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    View More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Collaborations Section */}
          <div className="mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-slate-900">
              Industry Collaborations
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              IETI partners with leading educational institutions and organizations to provide comprehensive training and career development opportunities.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborations.map((partner, index) => (
                <Card key={index} className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                      <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain"/>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900">{partner.name}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{partner.description}</p>
                    {partner.link && (
                      <a href={partner.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                        Visit Website
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
