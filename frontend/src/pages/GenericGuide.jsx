import { BookOpen, Download, HelpCircle, Shield, Check, Stethoscope, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const GenericGuide = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Your Guide to Generic Medications</h1>
            <p className="text-blue-100 text-lg mb-8">
              Understanding generic drugs is the first step toward significant savings without compromising on healthcare quality. Learn how generics compare to brand names and how to read pharmaceutical classifications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/optimizer" className="bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 flex items-center shadow-lg transition-transform hover:scale-105">
                <Zap className="h-5 w-5 mr-2 text-yellow-500 fill-current" /> Try SmartRx Optimizer
              </Link>
              <button className="bg-blue-700 text-white border border-blue-500 px-6 py-3 rounded-md font-medium hover:bg-blue-800 flex items-center">
                <Download className="h-5 w-5 mr-2" /> Download PDF Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Effectiveness Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Are Generics Just as Effective?</h2>
            <p className="text-slate-600 mb-8">
              The FDA requires generic drugs to have the same active ingredient, strength, dosage form, and route of administration as the brand-name drug. Clinical data consistently shows equivalent therapeutic outcomes.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium text-slate-900 mb-1">
                  <span>Brand Name Drug Efficacy</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-medium text-slate-900 mb-1">
                  <span>Generic Equivalent Efficacy</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 text-green-800 p-4 rounded-lg text-sm flex items-start">
              <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <p>Active ingredients in the generic are bioequivalent to those in the brand-name drugs.</p>
            </div>
          </div>
          <div className="md:w-1/2">
             <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative border border-slate-200 shadow-xl flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                <div className="z-10 text-white text-center">
                   <Shield className="h-16 w-16 mx-auto mb-4 text-green-400 opacity-80" />
                   <p className="text-xl font-medium tracking-widest uppercase">Safe & Effective</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Classification Guide */}
      <section className="py-16 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Medicine Classification Guide</h2>
          <p className="text-slate-600 mb-8">Understanding the regulatory categories for pharmaceutical products.</p>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">Schedule</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">Category Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">Regulatory Requirement</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">Usage Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">SCHEDULE H</span></td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Prescription Only</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Must be sold by retail only on prescription of a RMP.</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Antibiotics, most chronic meds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">SCHEDULE H1</span></td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Restricted Antibiotics</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Requires separate register for sale; stricter tracking.</td>
                  <td className="px-6 py-4 text-sm text-slate-600">3rd/4th Gen Antibiotics, Narcotics</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded">SCHEDULE X</span></td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Highly Regulated</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Meticulous records; prescription copy kept for 2 years.</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Psychotropic substances</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">OTC</span></td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Over-The-Counter</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Safe for consumer use without medical supervision.</td>
                  <td className="px-6 py-4 text-sm text-slate-600">Common cold, pain relief</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Why are generics cheaper?</h3>
              <p className="text-slate-600">Generic manufacturers don't have the high costs of drug discovery and clinical trials that brand-name companies have already completed.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Same active ingredients?</h3>
              <p className="text-slate-600">Yes. Generics must use the exact same active pharmaceutical ingredients (API) as the brand name medication to receive approval.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-10 w-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Are they safe?</h3>
              <p className="text-slate-600">Every generic drug goes through a rigorous FDA review process to ensure it meets the same high standards for quality and purity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-green-800 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-3/5 p-10 lg:p-12 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Stethoscope className="h-8 w-8 text-green-300" />
              <h2 className="text-3xl font-bold">Ready to Optimize?</h2>
            </div>
            <p className="text-green-100 mb-8 max-w-lg text-lg">
              Stop guessing and start saving. Use our powerful AI tool to automatically find safe generic alternatives for your specific prescription.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-sm text-green-100"><Check className="h-4 w-4 mr-2 text-green-400" /> Auto-scan any prescription</div>
              <div className="flex items-center text-sm text-green-100"><Check className="h-4 w-4 mr-2 text-green-400" /> Compare exact savings</div>
              <div className="flex items-center text-sm text-green-100"><Check className="h-4 w-4 mr-2 text-green-400" /> Find Jan Aushadhi stores</div>
              <div className="flex items-center text-sm text-green-100"><Check className="h-4 w-4 mr-2 text-green-400" /> Apply government subsidies</div>
            </div>
            <Link to="/optimizer" className="bg-white text-green-800 px-8 py-4 rounded-md font-bold hover:bg-green-50 flex items-center shadow-lg transition-transform hover:scale-105 inline-flex">
              <Zap className="h-6 w-6 mr-2 text-yellow-500 fill-current" /> Launch SmartRx Optimizer
            </Link>
          </div>
          <div className="md:w-2/5 bg-slate-900 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GenericGuide;
