import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ChevronRight, Pill } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/compare', label: 'Compare' },
    { to: '/guide', label: 'Generic Guide' },
    { to: '/optimizer', label: 'Smart Optimizer', highlight: true },
    { to: '/insights', label: 'News' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`navbar-glass sticky top-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Pill className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Medi<span className="gradient-text">Price</span>Watch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.highlight ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive(link.to)
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.to)
                        ? 'text-primary-700 nav-link active'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <button className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-100">
                <Globe className="h-5 w-5" />
              </button>
              <Link
                to="/report"
                className="hidden sm:inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-md hover:shadow-lg"
              >
                Report Violation
              </Link>
              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <Pill className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">MediPriceWatch</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all mb-1 ${
                  isActive(link.to)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span>{link.label}</span>
                <ChevronRight className={`h-4 w-4 ${isActive(link.to) ? 'text-primary-500' : 'text-slate-300'}`} />
              </Link>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-slate-100">
            <Link
              to="/report"
              className="flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Report Violation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
