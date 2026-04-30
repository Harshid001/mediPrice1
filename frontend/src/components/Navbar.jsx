import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-700">MediPriceWatch</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Solutions</Link>
            <Link to="/compare" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium border-b-2 border-primary-500">Compare</Link>
            <Link to="/guide" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Generic Guide</Link>
            <Link to="/optimizer" className="text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-2 rounded-md text-sm font-bold flex items-center">Smart Optimizer</Link>
            <Link to="/insights" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">News</Link>
            <Link to="/about" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">About</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Globe className="h-5 w-5" />
            </button>
            <Link to="/report" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
              Report Violation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
