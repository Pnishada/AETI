// pages/download.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

const downloads = [
  { 
    title: "Full-time Course Application", 
    file: "/files/fulltime-application.pdf", 
    description: "Application form for full-time courses." 
  },
  { 
    title: "Request for Confirmation of Certificates", 
    file: "/files/certificate-confirmation.pdf", 
    description: "Request official confirmation of your certificates." 
  },
  { 
    title: "Registration as an In-Plant Training Provider", 
    file: "/files/in-plant-registration.pdf", 
    description: "Register as a certified in-plant training provider." 
  },
  { 
    title: "Request Trainees for OJT/Industry", 
    file: "/files/request-trainees.pdf", 
    description: "Request trainees for on-the-job training or industrial placements." 
  },
  { 
    title: "Attendance Form for In-Plant Trainees", 
    file: "/files/attendance-form.pdf", 
    description: "Record attendance for in-plant trainees." 
  },
];

export default function DownloadPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#8B1E1E] mb-4 text-center">Downloads</h1>
          <p className="text-center text-gray-700 mb-12">
            Download official forms, brochures, and other documents for students and applicants.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow hover:-translate-y-1 transform"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E]">
                    <Download className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{item.description}</p>

                {/* Download Link */}
                <a
                  href={item.file}
                  download
                  className="w-full bg-[#8B1E1E] hover:bg-[#6F1616] text-white px-4 py-2 rounded-lg shadow-md font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
