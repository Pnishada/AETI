import { GraduationCap, Phone, Mail, MapPin, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-[#7b1e1e] via-[#5a0f0f] to-[#8b1e1e] text-white w-full"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">

          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(139,28,28,0.5)]">
                <GraduationCap className="text-[#8b1e1e] w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">AETI</span>
            </div>
            <p className="text-slate-100 text-sm leading-relaxed">
              To provide specialized training and address workforce needs in the
              automotive industry, preparing graduates for local and international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/departments" className="hover:text-white transition-colors">Departments</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Apply Online</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li><a href="#apprenticeships" className="hover:text-white transition-colors">Apprenticeships</a></li>
              <li><a href="#nvq" className="hover:text-white transition-colors">NVQ Programs</a></li>
              <li><a href="#career" className="hover:text-white transition-colors">Career Development</a></li>
              <li><a href="#partnerships" className="hover:text-white transition-colors">Industry Partnerships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>
                  Automobile Engineering Training Institute <br />
                  69/A, Baseline Road, Orugodawatta
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1" />
                <span>0112572977 / 0112531844 / 0112532182</span>
              </li>
              <li className="flex items-start">
                <Printer className="w-4 h-4 mr-2 mt-1" />
                <span>Fax: 0112512181</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1" />
                <span>
                  Director/Principal:{" "}
                  <a href="mailto:diraeti@naita.gov.lk" className="hover:text-white">diraeti@naita.gov.lk</a><br />
                  Part-time Division:{" "}
                  <a href="mailto:aetiparttime@gmail.com" className="hover:text-white">aetiparttime@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#4b0c0c]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-slate-300 text-sm">
            © 2025 NAITA - National Apprentice and Industrial Training Authority.
          </p>
        </div>
      </div>
    </footer>
  );
}
