import { Bell, Search, Trash2, Mail, MessageSquare, Smartphone, Activity, Info } from 'lucide-react';

const PriceAlert = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Price Alert Subscription</h1>
          <p className="text-slate-600 max-w-3xl">
            Monitor medication pricing in real-time. Set target prices and receive instant notifications across your preferred channels when costs drop.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Add New Alert Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900">Add New Alert</h2>
                <Bell className="h-5 w-5 text-primary-600" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Medication Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Start typing medication name..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white">
                    <option>Brand Name</option>
                    <option>Generic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Target Price ($)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">$</span>
                    <input type="text" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="0.00" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Notification Frequency</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white">
                    <option>Instant Notification</option>
                    <option>Daily Digest</option>
                    <option>Weekly Digest</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full bg-primary-800 text-white font-medium py-3 rounded-lg hover:bg-primary-900 transition-colors flex items-center justify-center">
                <Bell className="h-4 w-4 mr-2" /> Create Price Alert
              </button>
            </div>

            {/* My Active Alerts */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">My Active Alerts</h2>
              <div className="space-y-4">
                
                {/* Alert 1 */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold text-slate-900 text-lg mr-2">Atorvastatin</h3>
                        <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded uppercase tracking-wider">Generic</span>
                      </div>
                      <p className="text-sm text-slate-500">Targeting: <strong className="text-green-700">$12.50</strong> / 30 day supply</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-2 bg-gray-50 p-1.5 rounded-md border border-gray-100">
                      <button className="p-1 text-gray-400 hover:text-primary-600"><Mail className="h-4 w-4" /></button>
                      <button className="p-1 text-primary-600 bg-white shadow-sm rounded"><MessageSquare className="h-4 w-4" /></button>
                      <button className="p-1 text-primary-600 bg-white shadow-sm rounded"><Smartphone className="h-4 w-4" /></button>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 p-2"><Trash2 className="h-5 w-5" /></button>
                  </div>
                </div>

                {/* Alert 2 */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4">
                      <div className="w-5 h-5 rounded-full border-2 border-amber-600"></div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold text-slate-900 text-lg mr-2">Humalog KwikPen</h3>
                        <span className="text-[10px] font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded uppercase tracking-wider">Brand</span>
                      </div>
                      <p className="text-sm text-slate-500">Targeting: <strong className="text-green-700">$35.00</strong> / 5 pack</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-2 bg-gray-50 p-1.5 rounded-md border border-gray-100">
                      <button className="p-1 text-primary-600 bg-white shadow-sm rounded"><Mail className="h-4 w-4" /></button>
                      <button className="p-1 text-gray-400 hover:text-primary-600"><MessageSquare className="h-4 w-4" /></button>
                      <button className="p-1 text-primary-600 bg-white shadow-sm rounded"><Smartphone className="h-4 w-4" /></button>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 p-2"><Trash2 className="h-5 w-5" /></button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* How it works */}
            <div className="bg-[#2A3441] rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">How it Works</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-slate-600 z-0"></div>
                
                <div className="relative z-10 flex">
                  <div className="h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ring-4 ring-[#2A3441]">1</div>
                  <div className="ml-4">
                    <h4 className="font-bold text-sm">Search & Select</h4>
                    <p className="text-xs text-slate-400 mt-1">Choose the specific dosage and brand or generic version.</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex">
                  <div className="h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ring-4 ring-[#2A3441]">2</div>
                  <div className="ml-4">
                    <h4 className="font-bold text-sm">Set Your Price</h4>
                    <p className="text-xs text-slate-400 mt-1">Enter the maximum amount you're willing to pay per fill.</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex">
                  <div className="h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ring-4 ring-[#2A3441]">3</div>
                  <div className="ml-4">
                    <h4 className="font-bold text-sm">Get Notified</h4>
                    <p className="text-xs text-slate-400 mt-1">We'll alert you via SMS, Email or App push the moment it hits.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Alert Insights</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-primary-700 mr-2">12</span>
                <span className="text-slate-600 pb-1">Savings found this month</span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Active Alerts</span>
                  <span className="font-bold text-slate-900">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Triggered (24h)</span>
                  <span className="font-bold text-amber-600">2</span>
                </div>
              </div>
              
              <div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-primary-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-slate-400 text-center">75% of your alerts have found lower prices in the last 30 days.</p>
              </div>
            </div>

            {/* Help Banner */}
            <div className="rounded-xl overflow-hidden relative shadow-sm h-40 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-600"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium">Need help with generic alternatives? Talk to our consultants.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceAlert;
