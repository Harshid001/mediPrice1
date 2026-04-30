import { AlertTriangle, Upload, CheckCircle, Clock, Calendar, Shield, Phone, Mail } from 'lucide-react';

const ReportViolation = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#fdf8f4] border-b border-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-8 w-8 text-amber-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Report a Violation</h1>
              <p className="text-slate-600 max-w-2xl">
                If you have been overcharged or noticed a pharmacy violating pricing regulations, please provide the details below. We help you hold providers accountable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Column */}
          <div className="lg:w-2/3 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                
                {/* Pharmacy Details */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-50 p-2 rounded mr-3">
                      <AlertTriangle className="h-5 w-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Pharmacy Details</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pharmacy Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="e.g. HealthFirst Pharmacy" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Location / Address</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Street, City, State" />
                    </div>
                  </div>
                </div>

                {/* Violation Information */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-50 p-2 rounded mr-3">
                      <AlertTriangle className="h-5 w-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Violation Information</h2>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Type of Violation</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white">
                      <option>Overcharging (Above MRP)</option>
                      <option>Refusal to substitute generic</option>
                      <option>Counterfeit medication suspected</option>
                    </select>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Medicine Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="e.g. Amoxicillin 500mg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Quantity Purchased</label>
                        <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="10" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">MRP (Per Unit)</label>
                        <div className="relative">
                          <span className="absolute left-4 top-3 text-gray-500">$</span>
                          <input type="text" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="0.00" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Price Charged (Per Unit)</label>
                        <div className="relative">
                          <span className="absolute left-4 top-3 text-gray-500">$</span>
                          <input type="text" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="0.00" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-amber-700 mb-2">Total Overcharge</label>
                        <div className="w-full px-4 py-3 bg-amber-100 border border-amber-300 rounded-lg text-amber-900 font-bold text-center">
                          $0.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evidence Upload */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-50 p-2 rounded mr-3">
                      <AlertTriangle className="h-5 w-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Evidence Upload</h2>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                    <p className="text-slate-900 font-medium mb-1"><span className="text-primary-600">Click to upload</span> or drag and drop</p>
                    <p className="text-slate-500 text-sm">PDF, PNG, JPG or HEIC (max. 10MB)</p>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-primary-800 text-white font-bold py-4 rounded-lg hover:bg-primary-900 transition-colors text-lg">
                  Submit Report
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  By submitting, you agree to our Terms of Use and confirm that the information provided is accurate to the best of your knowledge.
                </p>

              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* How it works */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6">How it works</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 z-0"></div>
                
                <div className="relative z-10 flex">
                  <div className="h-8 w-8 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5 ring-4 ring-white">1</div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Verification</h4>
                    <p className="text-sm text-slate-600 mt-1">Our team cross-references your report with official drug pricing databases.</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex">
                  <div className="h-8 w-8 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5 ring-4 ring-white">2</div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Official Filing</h4>
                    <p className="text-sm text-slate-600 mt-1">We assist in drafting and submitting a formal complaint to state health authorities.</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex">
                  <div className="h-8 w-8 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5 ring-4 ring-white">3</div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Resolution</h4>
                    <p className="text-sm text-slate-600 mt-1">You receive updates on the status of the investigation and potential refund actions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Estimated Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Clock className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-slate-700 font-medium text-sm">Initial Review: 24-48 Hours</span>
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-slate-700 font-medium text-sm">State Response: 15-30 Days</span>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-[#0f1f38] text-white rounded-xl p-6 relative overflow-hidden">
              <Shield className="absolute -right-4 -bottom-4 h-32 w-32 text-blue-900 opacity-50" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Your Rights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm"><CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> Right to an itemized receipt.</li>
                  <li className="flex items-start text-sm"><CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> Right to generic alternatives.</li>
                  <li className="flex items-start text-sm"><CheckCircle className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> Protection against overcharging.</li>
                </ul>
              </div>
            </div>

            {/* Quick Assistance */}
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center"><Phone className="h-5 w-5 mr-2" /> Quick Assistance</h3>
              <div className="space-y-3">
                <div className="bg-white px-4 py-3 rounded-md flex justify-between items-center border border-red-100 shadow-sm">
                  <span className="text-sm text-slate-600 font-medium">Legal Helpline</span>
                  <span className="text-red-700 font-bold">1-800-555-0199</span>
                </div>
                <div className="bg-white px-4 py-3 rounded-md flex justify-between items-center border border-red-100 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-slate-600 font-medium">Email Support</span>
                  <Mail className="h-4 w-4 text-red-700" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViolation;
