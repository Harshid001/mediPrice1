import { Link } from 'react-router-dom';
import { Pill, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient text-white relative">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-5">
                <div className="h-9 w-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Pill className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">MediPriceWatch</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Providing transparency in pharmaceutical pricing to ensure affordable healthcare for everyone across India.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3">
                {['X', 'In', 'Gh'].map((label, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all text-xs font-bold border border-slate-700 hover:border-slate-600"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { to: '/compare', label: 'Compare Prices' },
                  { to: '/locator', label: 'Pharmacy Near Me' },
                  { to: '/alerts', label: 'Price Alerts' },
                  { to: '/optimizer', label: 'SmartRx Optimizer' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-white text-sm flex items-center group transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase mb-5">Resources</h3>
              <ul className="space-y-3">
                {[
                  { to: '/guide', label: 'Savings Guide' },
                  { to: '/compliance', label: 'Regulatory News' },
                  { to: '/admin', label: 'Admin Dashboard' },
                  { to: '/about', label: 'About Us' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-white text-sm flex items-center group transition-colors"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xs font-bold text-slate-300 tracking-[0.15em] uppercase mb-5">Stay Updated</h3>
              <p className="text-slate-400 text-sm mb-4">Get weekly policy alerts and pricing insights.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-glow-input w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2.5 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-md hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} MediPriceWatch. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 flex items-center">
              Made with <Heart className="h-3.5 w-3.5 mx-1 text-red-500 fill-red-500" /> for affordable healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
