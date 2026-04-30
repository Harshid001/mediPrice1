import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-white mb-4 block">MediPriceWatch</span>
            <p className="text-slate-300 text-sm">
              Providing transparency in pharmaceutical pricing to ensure affordable healthcare for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/compare" className="hover:text-white">Compare Prices</Link></li>
              <li><Link to="/locator" className="hover:text-white">Pharmacy Near Me</Link></li>
              <li><Link to="/alerts" className="hover:text-white">Price Alerts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/guide" className="hover:text-white">Savings Guide</Link></li>
              <li><Link to="/compliance" className="hover:text-white">Regulatory News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <p className="text-sm text-slate-300">Sign up for our daily policy alerts.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          © 2024 MediPriceWatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
