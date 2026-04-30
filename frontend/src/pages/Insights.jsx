import { Download } from 'lucide-react';

const Insights = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Insights & Pharmaceutical Policy</h1>
          <p className="text-lg text-slate-600 mb-8">
            Stay informed on the latest drug pricing regulations, clinical breakthroughs, and market analysis from healthcare experts.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-1.5 bg-primary-800 text-white rounded-full text-sm font-medium">All Posts</button>
            <button className="px-4 py-1.5 bg-gray-200 text-slate-700 hover:bg-gray-300 rounded-full text-sm font-medium">Policy Updates</button>
            <button className="px-4 py-1.5 bg-gray-200 text-slate-700 hover:bg-gray-300 rounded-full text-sm font-medium">Price Analysis</button>
            <button className="px-4 py-1.5 bg-gray-200 text-slate-700 hover:bg-gray-300 rounded-full text-sm font-medium">Legal Watch</button>
            <button className="px-4 py-1.5 bg-gray-200 text-slate-700 hover:bg-gray-300 rounded-full text-sm font-medium">Generic Guide</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Feed Column */}
          <div className="lg:w-2/3 space-y-6">
            
            {/* Post 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow cursor-pointer">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center text-xs font-bold mb-3">
                  <span className="text-primary-700 uppercase tracking-wider mr-3">POLICY UPDATES</span>
                  <span className="text-slate-400">Oct 14, 2024</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">The Impact of the Inflation Reduction Act on 2025 Drug Pricing</h2>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  An in-depth analysis of how new legislative measures are expected to shift the landscape for Medicare Part D beneficiaries and the ripple effects across commercial markets.
                </p>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Dr. Sarah Thompson" className="w-8 h-8 rounded-full object-cover mr-3 grayscale" />
                  <span className="text-sm font-medium text-slate-700">Dr. Sarah Thompson</span>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow cursor-pointer">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center text-xs font-bold mb-3">
                  <span className="text-primary-700 uppercase tracking-wider mr-3">PRICE ANALYSIS</span>
                  <span className="text-slate-400">Oct 12, 2024</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Generic Entry Strategy: A Guide for Price Transparency</h2>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  Navigating the complex world of generic pharmaceutical launches and understanding why prices don't always drop immediately upon patent expiration.
                </p>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Marcus Chen" className="w-8 h-8 rounded-full object-cover mr-3 grayscale" />
                  <span className="text-sm font-medium text-slate-700">Marcus Chen</span>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow cursor-pointer">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center"></div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center text-xs font-bold mb-3">
                  <span className="text-primary-700 uppercase tracking-wider mr-3">LEGAL WATCH</span>
                  <span className="text-slate-400">Oct 08, 2024</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Supreme Court Cases That Could Alter Drug Patent Laws</h2>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  Understanding the "patent thicket" and the upcoming legal battles that may determine future medication affordability and access.
                </p>
                <div className="flex items-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Elena Rodriguez" className="w-8 h-8 rounded-full object-cover mr-3 grayscale" />
                  <span className="text-sm font-medium text-slate-700">Elena Rodriguez</span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">&lt;</button>
                <button className="px-4 py-2 border border-primary-700 bg-primary-800 text-white rounded font-medium">1</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">2</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">3</button>
                <button className="px-4 py-2 border border-transparent text-slate-600 bg-transparent cursor-default font-medium">...</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">8</button>
                <button className="px-4 py-2 border border-gray-300 bg-white text-slate-600 hover:bg-gray-50 rounded font-medium">&gt;</button>
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Newsletter */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Stay Informed</h3>
              <p className="text-sm text-slate-600 mb-6">Get weekly updates on pharmaceutical legislation and market trends delivered to your inbox.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                <button type="button" className="w-full bg-primary-900 text-white font-bold py-3 rounded-lg hover:bg-primary-800 transition-colors">
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-center text-slate-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>

            {/* Most Read */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">MOST READ</h3>
              <div className="space-y-6">
                <div className="flex items-start group cursor-pointer">
                  <span className="text-3xl font-bold text-primary-600 mr-4 mt-0.5 leading-none group-hover:text-primary-700 transition-colors">01</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary-700 transition-colors text-sm">5 Common Misconceptions About Insulin Pricing</h4>
                </div>
                <div className="flex items-start group cursor-pointer">
                  <span className="text-3xl font-bold text-primary-600 mr-4 mt-0.5 leading-none group-hover:text-primary-700 transition-colors">02</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary-700 transition-colors text-sm">State-by-State Guide to Prescription Advocacy</h4>
                </div>
                <div className="flex items-start group cursor-pointer">
                  <span className="text-3xl font-bold text-primary-600 mr-4 mt-0.5 leading-none group-hover:text-primary-700 transition-colors">03</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary-700 transition-colors text-sm">Understanding PBMs: The Hidden Middlemen</h4>
                </div>
              </div>
            </div>

            {/* Policy Briefings */}
            <div className="bg-[#f5f8f5] rounded-xl border border-primary-100 p-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">POLICY BRIEFINGS</h3>
              <div className="space-y-3">
                <a href="#" className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-primary-300 transition-colors group">
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 text-primary-700 mr-3" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary-700">2024 Q3 Report</h4>
                      <p className="text-xs text-slate-500">PDF • 4.2 MB</p>
                    </div>
                  </div>
                  <Download className="h-4 w-4 text-slate-400 group-hover:text-primary-700" />
                </a>
                <a href="#" className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-primary-300 transition-colors group">
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 text-primary-700 mr-3" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary-700">Price Transparency Act</h4>
                      <p className="text-xs text-slate-500">PDF • 1.8 MB</p>
                    </div>
                  </div>
                  <Download className="h-4 w-4 text-slate-400 group-hover:text-primary-700" />
                </a>
              </div>
            </div>

            {/* Trending Topics */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">TRENDING TOPICS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 text-slate-600 text-xs font-medium rounded hover:bg-gray-50 cursor-pointer">#Biosimilars</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-slate-600 text-xs font-medium rounded hover:bg-gray-50 cursor-pointer">#Regulation</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-slate-600 text-xs font-medium rounded hover:bg-gray-50 cursor-pointer">#Medicare</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-slate-600 text-xs font-medium rounded hover:bg-gray-50 cursor-pointer">#GenericDrugs</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-slate-600 text-xs font-medium rounded hover:bg-gray-50 cursor-pointer">#PharmaLaw</span>
                <span className="px-3 py-1 bg-white border border-gray-200 text-slate-600 text-xs font-medium rounded hover:bg-gray-50 cursor-pointer">#PriceCaps</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const FileTextIcon = (props) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

export default Insights;
