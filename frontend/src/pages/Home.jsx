import { ArrowRight, CheckCircle, Shield, TrendingDown, Users, FileText, Zap, Building, Building2, Stethoscope, Scale, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white pt-20 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Medicine Shouldn't<br />Cost You Everything
            </h1>
            <p className="text-primary-100 text-lg mb-8 max-w-lg">
              We bring transparency to pharmaceutical pricing, empowering patients, providers, and employers to make informed decisions and control costs.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold">12M+</p>
                <p className="text-primary-200 text-sm">Savings Found</p>
              </div>
              <div>
                <p className="text-3xl font-bold">45%</p>
                <p className="text-primary-200 text-sm">Lower Prices</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-primary-200 text-sm">Price Tracking</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
             <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-2xl">
                {/* Simulated Image Box */}
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-slate-700 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                   <div className="z-10 text-center">
                      <Zap className="h-12 w-12 text-primary-400 mx-auto mb-2 opacity-50" />
                      <p className="text-slate-400 text-sm font-medium">Healthcare Data Visualized</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise-Grade Solutions</h2>
            <p className="text-slate-600">Advanced compliance tools and pricing analytics designed for healthcare organizations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Price Auditing', icon: <TrendingDown className="h-6 w-6 text-primary-600" />, desc: 'Automated monitoring of average wholesale prices.' },
              { title: 'Market Analysis', icon: <Shield className="h-6 w-6 text-primary-600" />, desc: 'Real-time intelligence on pharmaceutical pricing trends.' },
              { title: 'Compliance', icon: <CheckCircle className="h-6 w-6 text-primary-600" />, desc: 'Build adherence to state and federal price transparency mandates.' },
              { title: 'PBM Metrics', icon: <FileText className="h-6 w-6 text-primary-600" />, desc: 'Evaluate Pharmacy Benefit Manager performance and spread pricing.' },
              { title: 'Procurement Optimization', icon: <Building className="h-6 w-6 text-primary-600" />, desc: 'Identify savings opportunities across your supply chain.' },
              { title: 'Benefit Design', icon: <Users className="h-6 w-6 text-primary-600" />, desc: 'Structure formularies that prioritize cost-effective medications.' }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50/50">
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Banner */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
           <div>
             <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-2 block">Enterprise Procurement Tool</span>
             <h2 className="text-3xl font-bold mb-4">Reduce Pharmacy Spend by 80%</h2>
             <p className="text-blue-100 mb-6 max-w-lg">By leveraging MedPriceWatch's generic alternative engine, our enterprise clients see dramatic reductions in their prescription drug spending.</p>
             <button className="bg-white text-blue-600 px-6 py-2.5 rounded-md font-medium hover:bg-blue-50 transition-colors">
               Learn More About Enterprise
             </button>
           </div>
           <div className="mt-8 md:mt-0 bg-blue-700/50 p-6 rounded-xl border border-blue-500 min-w-[320px]">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-sm text-blue-200">Current Spend</p>
                  <p className="text-2xl font-bold">$1.2M</p>
                </div>
                <TrendingDown className="h-8 w-8 text-white opacity-50" />
                <div className="text-right">
                  <p className="text-sm text-blue-200">Projected Spend</p>
                  <p className="text-2xl font-bold text-green-300">$240k</p>
                </div>
              </div>
              <div className="h-2 bg-blue-900 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-green-400 w-1/5 rounded-full"></div>
              </div>
           </div>
        </div>
      </section>
      
      {/* Target Audiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Solutions for Everyone</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
             {[
               { icon: <Users />, title: 'For Patients', desc: 'Navigate complex pricing, find the lowest cost options, and advocate for your health.' },
               { icon: <Building2 />, title: 'For Employers', desc: 'Analyze PBM transparency, optimize benefits, and reduce corporate healthcare spend.' },
               { icon: <Stethoscope />, title: 'For Providers', desc: 'Prescribe cost-effective alternatives to improve patient adherence and outcomes.' },
               { icon: <Scale />, title: 'For Regulators', desc: 'Access granular data to enforce pricing transparency mandates and monitor compliance.' }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-4">
                   {item.icon}
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                 <Link to="/" className="text-primary-600 text-sm font-medium hover:text-primary-700 inline-flex items-center">
                   Learn More <ArrowRight className="ml-1 h-4 w-4" />
                 </Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Report Violation CTA */}
      <section className="py-12 bg-amber-500 text-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
           <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-amber-400 p-3 rounded-full mr-6 hidden md:block">
                 <AlertTriangle className="h-8 w-8 text-amber-900" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold mb-1">Witnessed a Price Violation?</h2>
                 <p className="text-amber-800">If you believe a pharmacy or provider is charging above mandated limits, report it confidentially.</p>
              </div>
           </div>
           <Link to="/report" className="bg-amber-900 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-950 transition-colors whitespace-nowrap">
              File a Formal Report
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
