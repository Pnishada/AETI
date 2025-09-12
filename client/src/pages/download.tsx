// pages/download.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

const downloads = [
  { title: "Admission Form", file: "/files/form1.pdf", description: "Fill this form to apply for admission." },
  { title: "Course Brochure", file: "/files/brochure.pdf", description: "Detailed information about programs." },
  { title: "Guidelines", file: "/files/guidelines.pdf", description: "Official guidelines for students." },
  { title: "Part-time Application", file: "/files/parttime.pdf", description: "Application for part-time courses." },
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
