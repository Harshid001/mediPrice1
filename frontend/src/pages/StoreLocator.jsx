import { MapPin, Search, Filter, Star, Navigation, Phone, Plus, Minus } from 'lucide-react';

const StoreLocator = () => {
  const pharmacies = [
    { name: 'Kendra #2401 - Civil Lines', type: 'JAN AUSHADHI', typeColor: 'bg-green-100 text-green-800', rating: '4.8', address: 'Shop 12, Main Market, Civil Lines, New Delhi 110054', status: 'Open now • Closes 9PM', distance: '0.8 km away', isOpen: true, active: true },
    { name: 'Apollo Generic Pharmacy', type: 'CERTIFIED GENERIC', typeColor: 'bg-gray-100 text-slate-800', rating: '4.2', address: '44-B, North Avenue Road, Model Town II, Delhi 110009', status: 'Closed • Opens 8AM', distance: '1.4 km away', isOpen: false, active: false },
    { name: 'Kendra #1182 - Rohini', type: 'JAN AUSHADHI', typeColor: 'bg-green-100 text-green-800', rating: '4.5', address: 'Sector 8 Market, Near Metro Pillar 342, Rohini, Delhi', status: 'Open now • Closes 10PM', distance: '2.1 km away', isOpen: true, active: false },
    { name: 'LifeCare Medical Store', type: 'CERTIFIED GENERIC', typeColor: 'bg-gray-100 text-slate-800', rating: '4.9', address: 'C-12, Green Park Main, Opp Mother Dairy, Delhi', status: 'Open now • Closes 11PM', distance: '3.5 km away', isOpen: true, active: false },
  ];

  return (
    <div className="bg-gray-50 flex flex-col h-[calc(100vh-64px)]">
      {/* Header Search Area */}
      <div className="bg-primary-800 p-6 flex-shrink-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Find Jan Aushadhi & Generic Pharmacies</h1>
          <p className="text-primary-100 mb-6">Access quality affordable medicines by locating the nearest authorized distribution center or verified generic pharmacy in your city.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" className="block w-full pl-10 pr-3 py-3 rounded-md border-0 focus:ring-2 focus:ring-amber-500" placeholder="Enter city, ZIP, or locality..." />
            </div>
            <div className="relative md:w-64 flex-shrink-0">
              <select className="block w-full pl-3 pr-10 py-3 rounded-md border-0 focus:ring-2 focus:ring-amber-500 text-gray-900 appearance-none bg-white">
                <option>All Pharmacy Types</option>
                <option>Jan Aushadhi</option>
                <option>Certified Generic</option>
              </select>
            </div>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-600 transition-colors flex-shrink-0">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Sidebar + Map */}
      <div className="flex-grow flex overflow-hidden max-w-7xl mx-auto w-full p-4 gap-4">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4 flex-shrink-0">
            <h2 className="font-semibold text-slate-800 text-sm">12 PHARMACIES FOUND</h2>
            <button className="text-primary-700 text-sm font-medium flex items-center hover:text-primary-800">
              <Filter className="h-4 w-4 mr-1" /> Filter
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
            {pharmacies.map((pharmacy, idx) => (
              <div key={idx} className={`bg-white p-4 rounded-lg border ${pharmacy.active ? 'border-primary-500 shadow-md ring-1 ring-primary-500' : 'border-gray-200 hover:border-primary-300'} cursor-pointer transition-all`}>
                <div className="flex justify-between items-start mb-2">
                  <span className={`${pharmacy.typeColor} text-xs font-bold px-2 py-0.5 rounded`}>{pharmacy.type}</span>
                  <div className="flex items-center text-sm font-bold text-slate-700">
                    <Star className="h-4 w-4 text-amber-400 mr-1 fill-current" /> {pharmacy.rating}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{pharmacy.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{pharmacy.address}</p>
                <div className="flex justify-between items-end">
                  <span className={`text-sm font-medium ${pharmacy.isOpen ? 'text-green-600' : 'text-red-600'}`}>{pharmacy.status}</span>
                  <span className="text-sm text-slate-400">{pharmacy.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="hidden md:flex flex-col w-2/3 lg:w-3/4 h-full relative">
          <div className="flex-grow bg-[#f0ede5] rounded-xl border border-gray-200 overflow-hidden relative shadow-inner">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col bg-white rounded-md shadow-md overflow-hidden">
              <button className="p-2 border-b border-gray-100 hover:bg-gray-50 text-slate-600"><Plus className="h-5 w-5" /></button>
              <button className="p-2 hover:bg-gray-50 text-slate-600"><Minus className="h-5 w-5" /></button>
            </div>

            {/* Map Pins */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
               <div className="bg-primary-700 text-white p-2 rounded-full shadow-lg relative">
                 <MapPin className="h-6 w-6" />
                 <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-700 rotate-45"></div>
               </div>
               <div className="mt-2 bg-white px-3 py-1 rounded shadow text-xs font-bold text-slate-800">Kendra #2401</div>
            </div>

            <MapPin className="absolute top-1/3 left-2/3 h-8 w-8 text-primary-700 opacity-80" />
            <MapPin className="absolute bottom-1/3 left-1/2 h-8 w-8 text-gray-500 opacity-80" />
            <MapPin className="absolute bottom-1/4 right-1/4 h-8 w-8 text-gray-500 opacity-80" />
          </div>

          {/* Selected Pharmacy Footer Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 flex justify-between items-center z-20">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-700 mr-4">
                 <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Kendra #2401 - Civil Lines</h3>
                <p className="text-sm text-slate-500 flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-green-500" /> Verified Government Distributor</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-slate-700 font-medium hover:bg-gray-50 transition-colors">
                <Navigation className="h-4 w-4 mr-2 text-primary-600" /> Get Directions
              </button>
              <button className="flex items-center px-4 py-2 bg-primary-700 text-white rounded-md font-medium hover:bg-primary-800 transition-colors">
                <Phone className="h-4 w-4 mr-2" /> Call Store
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Quick fix for CheckCircle which was missing from the import
import { CheckCircle } from 'lucide-react';

export default StoreLocator;
