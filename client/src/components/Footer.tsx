import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4" data-testid="footer-brand">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="text-primary-foreground w-4 h-4" />
              </div>
              <span className="text-lg font-bold">IETI</span>
            </div>
            <p className="text-slate-400 text-sm" data-testid="text-footer-description">
              Building a skilled nation through quality training and apprenticeship programs.
            </p>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors" data-testid="footer-link-about">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors" data-testid="footer-link-programs">Programs</a></li>
              <li><a href="#training" className="hover:text-white transition-colors" data-testid="footer-link-training">Training Centers</a></li>
              <li><a href="#apply" className="hover:text-white transition-colors" data-testid="footer-link-apply">Apply Online</a></li>
            </ul>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#apprenticeships" className="hover:text-white transition-colors" data-testid="footer-link-apprenticeships">Apprenticeships</a></li>
              <li><a href="#nvq" className="hover:text-white transition-colors" data-testid="footer-link-nvq">NVQ Programs</a></li>
              <li><a href="#career" className="hover:text-white transition-colors" data-testid="footer-link-career">Career Development</a></li>
              <li><a href="#partnerships" className="hover:text-white transition-colors" data-testid="footer-link-partnerships">Industry Partnerships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div data-testid="footer-contact">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center" data-testid="contact-phone">
                <Phone className="w-4 h-4 mr-2" />
                +94 11 123 4567
              </li>
              <li className="flex items-center" data-testid="contact-email">
                <Mail className="w-4 h-4 mr-2" />
                info@naita.gov.lk
              </li>
              <li className="flex items-center" data-testid="contact-address">
                <MapPin className="w-4 h-4 mr-2" />
                Colombo, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm" data-testid="text-footer-copyright">
            © 2025 IETI - Industrial Engineering Training Institute.
          </p>
        </div>
      </div>
    </footer>
  );
}
