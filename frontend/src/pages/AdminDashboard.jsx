import { BarChart3, AlertTriangle, FileText, DollarSign, LayoutDashboard, Database, Users, ShieldCheck, Settings, Bell, Plus, Search, Mail, Download, Clock, RefreshCw, Edit3, CloudRain } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 bg-primary-900 text-white flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">MediPriceWatch</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center px-4 py-3 bg-primary-800 rounded-lg text-white font-medium">
            <LayoutDashboard className="h-5 w-5 mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-primary-200 hover:bg-primary-800 hover:text-white rounded-lg transition-colors">
            <AlertTriangle className="h-5 w-5 mr-3" /> Violations
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-primary-200 hover:bg-primary-800 hover:text-white rounded-lg transition-colors">
            <Database className="h-5 w-5 mr-3" /> Pricing Data
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-primary-200 hover:bg-primary-800 hover:text-white rounded-lg transition-colors">
            <Users className="h-5 w-5 mr-3" /> Manage Users
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-primary-200 hover:bg-primary-800 hover:text-white rounded-lg transition-colors">
            <ShieldCheck className="h-5 w-5 mr-3" /> Audit Logs
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-primary-200 hover:bg-primary-800 hover:text-white rounded-lg transition-colors">
            <Settings className="h-5 w-5 mr-3" /> System Config
          </a>
        </nav>
        
        <div className="p-4 border-t border-primary-800">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-primary-700 rounded-full flex items-center justify-center font-bold text-lg mr-3">AD</div>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-primary-300">admin@mediprice.gov</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center text-sm">
            <span className="text-slate-500">Admin</span>
            <span className="mx-2 text-slate-300">/</span>
            <span className="font-bold text-slate-900">Main Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative cursor-pointer">
              <Bell className="h-6 w-6 text-slate-600" />
              <div className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">4</div>
            </div>
            <button className="bg-primary-800 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-primary-900 flex items-center shadow-sm">
              <Plus className="h-4 w-4 mr-1" /> New Audit
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: 'TOTAL PRICING CHECKS', value: '1,284,092', change: '+12.4%', up: true, icon: <BarChart3 className="text-green-600 h-5 w-5" />, bg: 'bg-green-100' },
                { title: 'ACTIVE VIOLATIONS', value: '432', change: '+4.2%', up: true, icon: <AlertTriangle className="text-red-600 h-5 w-5" />, bg: 'bg-red-100', textClass: 'text-red-500' },
                { title: 'COMPLIANCE RATE', value: '94.8%', change: '-2.1%', up: false, icon: <FileText className="text-blue-600 h-5 w-5" />, bg: 'bg-blue-100', textClass: 'text-slate-500' },
                { title: 'SAVINGS IMPACT', value: '$2.4M', change: '+15.7%', up: true, icon: <DollarSign className="text-amber-600 h-5 w-5" />, bg: 'bg-amber-100' }
              ].map((kpi, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`h-10 w-10 ${kpi.bg} rounded-lg flex items-center justify-center`}>
                      {kpi.icon}
                    </div>
                    <div className={`text-xs font-bold flex items-center ${kpi.textClass || 'text-green-600'}`}>
                      {kpi.up ? <TrendingUpIcon /> : <TrendingDownIcon />} {kpi.change}
                    </div>
                  </div>
                  <h3 className="text-xs font-bold text-slate-500 tracking-wider mb-1">{kpi.title}</h3>
                  <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              
              {/* Chart: Monthly Price Sync */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Monthly Price Sync Frequency</h3>
                  <div className="flex space-x-2">
                    <span className="bg-gray-100 text-slate-600 px-3 py-1 rounded text-xs font-medium border border-gray-200">2024</span>
                    <span className="bg-gray-100 text-slate-600 px-3 py-1 rounded text-xs font-medium border border-gray-200">Monthly</span>
                  </div>
                </div>
                {/* Mock Bar Chart */}
                <div className="h-48 flex items-end justify-between gap-2 md:gap-4 px-2">
                  {[40, 60, 80, 45, 95, 70, 55, 30, 75, 85, 60, 75].map((h, i) => (
                    <div key={i} className="w-full bg-primary-800 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-medium mt-4 px-2">
                  <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
                </div>
              </div>

              {/* Chart: Violation Distribution */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Violation Distribution</h3>
                <div className="relative w-40 h-40 mx-auto mb-8">
                  {/* Mock Donut Chart */}
                  <div className="absolute inset-0 rounded-full border-[16px] border-primary-700"></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-red-600" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-[16px] border-amber-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 50% 0)' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-slate-900">432</span>
                    <span className="text-xs text-slate-500 font-medium">TOTAL</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-primary-700 mr-2"></span><span className="text-slate-700">Price Inaccuracy</span></div>
                    <span className="font-bold">52%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-600 mr-2"></span><span className="text-slate-700">Missing Generic</span></div>
                    <span className="font-bold">34%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span><span className="text-slate-700">Outdated Formulary</span></div>
                    <span className="font-bold">14%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              
              {/* Recent Violations Table */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-900">Recent Violations</h3>
                  <a href="#" className="text-sm font-medium text-primary-700 hover:text-primary-800">View All</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200 text-left text-xs font-bold text-slate-500 uppercase">
                      <tr>
                        <th className="px-6 py-4">Provider</th>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Priority</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { provider: 'Global Care Pharmacy', product: 'Lisinopril 10mg', priority: 'CRITICAL', pClass: 'bg-red-100 text-red-800', status: 'INVESTIGATING', sColor: 'bg-red-500' },
                        { provider: 'MedX Distributors', product: 'Metformin ER 500mg', priority: 'MEDIUM', pClass: 'bg-amber-100 text-amber-800', status: 'NOTIFIED', sColor: 'bg-amber-500' },
                        { provider: 'Reliant Health', product: 'Atorvastatin 20mg', priority: 'LOW', pClass: 'bg-green-100 text-green-800', status: 'RESOLVED', sColor: 'bg-green-500' }
                      ].map((v, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center mr-3 text-slate-500"><BuildingIcon /></div>
                              <span className="font-bold text-slate-900 text-sm">{v.provider}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{v.product}</td>
                          <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs font-bold ${v.pClass}`}>{v.priority}</span></td>
                          <td className="px-6 py-4">
                            <div className="flex items-center text-xs font-bold text-slate-700">
                              <span className={`w-2 h-2 rounded-full ${v.sColor} mr-2`}></span> {v.status}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-400 cursor-pointer hover:text-slate-600">
                            <MoreVerticalIcon />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Price Stream */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-slate-900">Price Stream</h3>
                </div>
                <div className="p-6 space-y-6">
                  
                  <div className="relative pl-6 border-l-2 border-green-200">
                    <div className="absolute -left-[9px] top-0 bg-green-100 p-1 rounded-full text-green-600 border-2 border-white"><RefreshCw className="h-3 w-3" /></div>
                    <h4 className="font-bold text-sm text-slate-900">Amlodipine Besylate</h4>
                    <p className="text-xs text-slate-500 mt-1">Price synchronized across 42 providers.</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">2 MINS AGO</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-amber-200">
                    <div className="absolute -left-[9px] top-0 bg-amber-100 p-1 rounded-full text-amber-600 border-2 border-white"><Edit3 className="h-3 w-3" /></div>
                    <h4 className="font-bold text-sm text-slate-900">System Update</h4>
                    <p className="text-xs text-slate-500 mt-1">Manual price adjustment for NRT-45.</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">14 MINS AGO</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-gray-100 pb-2">
                    <div className="absolute -left-[9px] top-0 bg-gray-100 p-1 rounded-full text-slate-500 border-2 border-white"><CloudRain className="h-3 w-3" /></div>
                    <h4 className="font-bold text-sm text-slate-900">CMS Import</h4>
                    <p className="text-xs text-slate-500 mt-1">Quarterly benchmark data imported.</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">1 HOUR AGO</p>
                  </div>

                  <button className="w-full py-2 border border-gray-300 rounded-md text-sm font-medium text-slate-700 hover:bg-gray-50">Clear Feed</button>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button className="bg-primary-900 text-white p-4 rounded-xl shadow-sm flex items-center justify-center font-medium hover:bg-primary-800 transition-colors">
                <Search className="h-5 w-5 mr-2" /> Deep Price Scan
              </button>
              <button className="bg-white border border-gray-200 text-slate-700 p-4 rounded-xl shadow-sm flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">
                <Mail className="h-5 w-5 mr-2 text-primary-700" /> Draft Bulk Notice
              </button>
              <button className="bg-white border border-gray-200 text-slate-700 p-4 rounded-xl shadow-sm flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">
                <Download className="h-5 w-5 mr-2 text-primary-700" /> Export Q3 Report
              </button>
              <button className="bg-white border border-gray-200 text-slate-700 p-4 rounded-xl shadow-sm flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">
                <Clock className="h-5 w-5 mr-2 text-primary-700" /> Restore Snapshot
              </button>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

// Simple icon components for the ones not in lucide or to avoid too many imports
const TrendingUpIcon = () => <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const TrendingDownIcon = () => <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>;
const BuildingIcon = () => <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const MoreVerticalIcon = () => <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>;

export default AdminDashboard;
