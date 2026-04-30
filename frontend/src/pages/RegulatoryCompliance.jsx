import { BookOpen, Calendar, AlertCircle, FileText, Download, CheckSquare, Square, File, Shield, Podcast, ArrowRight } from 'lucide-react';

const RegulatoryCompliance = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10 max-w-4xl">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-6">
            <span>Home</span>
            <span className="mx-2 text-slate-300">›</span>
            <span>Solutions</span>
            <span className="mx-2 text-slate-300">›</span>
            <span className="text-primary-700">Regulatory & Policy</span>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Regulatory Compliance & Policy Insight</h1>
          <p className="text-lg text-slate-600 mb-8">
            Navigate the complex landscape of healthcare pricing regulations. Our expert-led solutions help providers and insurers stay compliant with evolving federal transparency mandates.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-primary-800 text-white rounded-md text-sm font-medium">All Policy</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-slate-700 hover:bg-gray-50 rounded-md text-sm font-medium">Federal Acts</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-slate-700 hover:bg-gray-50 rounded-md text-sm font-medium">Price Transparency</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-slate-700 hover:bg-gray-50 rounded-md text-sm font-medium">No Surprises Act</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-slate-700 hover:bg-gray-50 rounded-md text-sm font-medium">State Mandates</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Column (Articles) */}
          <div className="lg:w-2/3 space-y-6">
            
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg text-green-700 mr-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Hospital Price Transparency Rule</h2>
                    <p className="text-sm text-slate-500">CMS Mandate Compliance Framework</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-slate-600 mb-6">
                Implementation strategies for the 2024 CMS updates, focusing on machine-readable file requirements and consumer-friendly display standards.
              </p>
              <div className="flex items-center text-sm">
                <div className="flex items-center text-slate-700 font-medium mr-6">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary-600" /> Impact: High Priority
                </div>
                <div className="flex items-center text-slate-500">
                  <Calendar className="h-4 w-4 mr-2" /> Updated: Oct 24, 2024
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mr-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">No Surprises Act Compliance</h2>
                    <p className="text-sm text-slate-500">Independent Dispute Resolution (IDR) Solutions</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Regulatory</span>
              </div>
              <p className="text-slate-600 mb-6">
                Navigating the arbitration process and ensuring patients receive accurate Good Faith Estimates (GFE) for scheduled items and services.
              </p>
              <div className="flex items-center text-sm">
                <div className="flex items-center text-slate-700 font-medium mr-6">
                  <AlertCircle className="h-4 w-4 mr-2 text-red-600" /> Impact: Critical
                </div>
                <div className="flex items-center text-slate-500">
                  <Calendar className="h-4 w-4 mr-2" /> Review: Quarterly
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-lg text-indigo-700 mr-4">
                    <DatabaseIcon />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Payer-to-Payer Data Exchange</h2>
                    <p className="text-sm text-slate-500">Interoperability and Patient Access</p>
                  </div>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">Development</span>
              </div>
              <p className="text-slate-600 mb-6">
                Technical standards for API implementation following the Interoperability and Patient Access Final Rule (CMS-9115-F).
              </p>
              <div className="flex items-center text-sm">
                <div className="flex items-center text-slate-700 font-medium mr-6">
                  <AlertCircle className="h-4 w-4 mr-2 text-amber-500" /> Impact: Medium
                </div>
                <div className="flex items-center text-slate-500">
                  <UsersIcon /> Focus: ITOps
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-700 mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Health Care Fraud Prevention</h2>
                    <p className="text-sm text-slate-500">OIG Compliance Program Guidelines</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-slate-600 mb-6">
                Monitoring protocols for identifying price gouging and fraudulent billing practices in accordance with OIG recommendations.
              </p>
              <div className="flex items-center text-sm">
                <div className="flex items-center text-slate-700 font-medium mr-6">
                  <AlertCircle className="h-4 w-4 mr-2 text-teal-600" /> Impact: Essential
                </div>
                <div className="flex items-center text-slate-500">
                  <Calendar className="h-4 w-4 mr-2" /> Status: Ongoing
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-primary-700 bg-primary-800 text-white rounded font-medium">1</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">2</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">3</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">&gt;</button>
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* Filter by Category */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Filter by Category</h3>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <CheckSquare className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-slate-700">Federal Regulations</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <Square className="h-5 w-5 text-gray-300 mr-3" />
                  <span className="text-slate-700">State Health Policies</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <Square className="h-5 w-5 text-gray-300 mr-3" />
                  <span className="text-slate-700">Compliance Toolkits</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <Square className="h-5 w-5 text-gray-300 mr-3" />
                  <span className="text-slate-700">Managed Care Models</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <Square className="h-5 w-5 text-gray-300 mr-3" />
                  <span className="text-slate-700">Data Standards (HL7/FHIR)</span>
                </label>
              </div>
            </div>

            {/* Download Guide */}
            <div className="bg-primary-800 rounded-xl shadow-sm p-8 text-center text-white">
              <FileText className="h-12 w-12 mx-auto mb-4 text-primary-200" />
              <h3 className="text-xl font-bold mb-2">Full Compliance Guide</h3>
              <p className="text-primary-100 text-sm mb-6">
                Download our comprehensive 2024 Regulatory Handbook (PDF, 4.2MB).
              </p>
              <button className="w-full bg-white text-primary-800 font-bold py-3 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" /> Download PDF
              </button>
            </div>

            {/* Expert Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Expert Resources</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-start group">
                  <File className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-slate-700 group-hover:text-primary-700 font-medium">CMS 2024 Final Rule Summary</span>
                </a>
                <a href="#" className="flex items-start group">
                  <HelpCircleIcon />
                  <span className="text-slate-700 group-hover:text-primary-700 font-medium">Compliance FAQ for Providers</span>
                </a>
                <a href="#" className="flex items-start group">
                  <Podcast className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-slate-700 group-hover:text-primary-700 font-medium">Policy Insights Weekly Podcast</span>
                </a>
              </div>
            </div>

            {/* Private Consultation CTA */}
            <div className="rounded-xl overflow-hidden relative shadow-sm h-48 group cursor-pointer border border-gray-200">
              <div className="absolute inset-0 bg-slate-900"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity mix-blend-overlay"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold mb-1">Request a Private Consultation</h3>
                <p className="text-slate-300 text-xs mb-3">Customized advice for your institution's specific regulatory challenges.</p>
                <div className="flex items-center text-sm font-bold text-white group-hover:text-primary-300 transition-colors">
                  Speak to an Expert <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const DatabaseIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
const UsersIcon = () => <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const HelpCircleIcon = () => <svg className="h-5 w-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default RegulatoryCompliance;
