import { Search, Info, CheckCircle, AlertCircle } from 'lucide-react';

const Compare = () => {
  const medicines = [
    { brand: 'Lipitor', generic: 'Atorvastatin', dosage: '10mg Tablet', brandMrp: '$42.50', genericPrice: '$8.20', savings: 'SAVE 81%', stock: 'In Stock', inStock: true },
    { brand: 'Glucophage', generic: 'Metformin', dosage: '500mg Tablet', brandMrp: '$18.90', genericPrice: '$3.50', savings: 'SAVE 82%', stock: 'In Stock', inStock: true },
    { brand: 'Ventolin', generic: 'Salbutamol', dosage: '100mcg Inhaler', brandMrp: '$24.00', genericPrice: '$12.40', savings: 'SAVE 48%', stock: 'Low Stock', inStock: false },
    { brand: 'Zoloft', generic: 'Sertraline', dosage: '50mg Tablet', brandMrp: '$56.20', genericPrice: '$14.90', savings: 'SAVE 74%', stock: 'In Stock', inStock: true },
    { brand: 'Nexium', generic: 'Esomeprazole', dosage: '20mg Capsule', brandMrp: '$38.15', genericPrice: '$9.30', savings: 'SAVE 76%', stock: 'In Stock', inStock: true },
  ];

  const filters = ['All Medicines', 'Cardiovascular', 'Diabetes', 'Antibiotics', 'Analgesics', 'Respiratory', 'Neurological', 'Dermatology'];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Compare Medicine Prices</h1>
          
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 sm:text-lg"
              placeholder="Search by brand name, generic name, or ailment..."
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <span className="text-sm font-medium text-slate-500 mr-2">Filters:</span>
            {filters.map((filter, idx) => (
              <button
                key={idx}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                  idx === 0 ? 'bg-primary-700 text-white' : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Brand Name</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Generic Ingredient</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Dosage</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Brand MRP</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Generic Price</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Savings</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Stock Status</th>
                  <th scope="col" className="px-6 py-4 relative"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicines.map((med, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-6 whitespace-nowrap text-sm font-bold text-primary-700">{med.brand}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-600">{med.generic}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-600">{med.dosage}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">{med.brandMrp}</td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm font-bold text-green-600">{med.genericPrice}</td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-md bg-green-100 text-green-800">
                        {med.savings}
                      </span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-600">
                      <div className="flex items-center">
                        {med.inStock ? (
                          <CheckCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-amber-500" />
                        )}
                        <span className={med.inStock ? 'text-green-700' : 'text-amber-700'}>{med.stock}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                      <button className="bg-primary-800 text-white px-4 py-2 rounded text-xs hover:bg-primary-900">Compare</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between sm:px-6">
            <div className="text-sm text-slate-500">
              Showing 1 to 5 of 128 medicines
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-slate-600 hover:bg-gray-50">«</button>
              <button className="px-3 py-1 border border-primary-600 rounded bg-primary-700 text-white">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-slate-600 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-slate-600 hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-slate-600 hover:bg-gray-50">»</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 flex items-start text-sm text-slate-600">
          <Info className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
          <p>
            <strong>Disclaimer:</strong> The prices listed above are for informational purposes only and are subject to change. "Generic Price" refers to the lowest available price for the generic equivalent in major pharmacy chains. This tool does not constitute medical advice. Always consult with a healthcare professional before switching medications. Stocks are updated every 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Compare;
