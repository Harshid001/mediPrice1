import { ArrowRight, CheckCircle, Shield, TrendingDown, Users, FileText, Zap, Building2, Stethoscope, Scale, AlertTriangle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-slate-50">
      {/* ══════════ HERO SECTION ══════════ */}
      <section className="hero-gradient hero-pattern text-white pt-20 pb-28 relative overflow-hidden">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 pr-0 lg:pr-12 animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-medium text-white/90">Trusted by 12M+ users across India</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Medicine Shouldn't
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300">
                Cost You Everything
              </span>
            </h1>
            <p className="text-green-100/90 text-lg mb-10 max-w-lg leading-relaxed">
              We bring transparency to pharmaceutical pricing, empowering patients, providers, and employers to make informed decisions and control costs.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 animate-fade-in-up delay-300">
              {[
                { value: '12M+', label: 'Savings Found' },
                { value: '45%', label: 'Lower Prices' },
                { value: '24/7', label: 'Price Tracking' },
              ].map((stat, i) => (
                <div key={i} className="stat-counter text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-white animate-count-up" style={{ animationDelay: `${0.4 + i * 0.15}s` }}>
                    {stat.value}
                  </p>
                  <p className="text-green-200/70 text-sm mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right — Floating Card */}
          <div className="lg:w-1/2 mt-14 lg:mt-0 animate-fade-in-up delay-200">
            <div className="relative hero-illustration">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-slate-700/50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="z-10 text-center animate-float">
                    <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white/80 text-sm font-semibold tracking-wide">Healthcare Data Visualized</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center space-x-3 border border-slate-100 animate-fade-in-up delay-500">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Average Savings</p>
                  <p className="text-lg font-bold text-slate-900">₹845 / Rx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ENTERPRISE SOLUTIONS ══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <p className="text-primary-600 text-sm font-bold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Enterprise-Grade Solutions</h2>
            <p className="text-slate-500 text-lg">Advanced compliance tools and pricing analytics designed for healthcare organizations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Price Auditing', icon: <TrendingDown className="h-6 w-6 text-primary-600" />, desc: 'Automated monitoring of average wholesale prices across pharmacy chains.', color: 'from-primary-500/10 to-primary-600/5' },
              { title: 'Market Analysis', icon: <Shield className="h-6 w-6 text-accent-600" />, desc: 'Real-time intelligence on pharmaceutical pricing trends and shifts.', color: 'from-accent-500/10 to-accent-600/5' },
              { title: 'Compliance', icon: <CheckCircle className="h-6 w-6 text-blue-600" />, desc: 'Build adherence to state and federal price transparency mandates.', color: 'from-blue-500/10 to-blue-600/5' },
              { title: 'PBM Metrics', icon: <FileText className="h-6 w-6 text-violet-600" />, desc: 'Evaluate Pharmacy Benefit Manager performance and spread pricing.', color: 'from-violet-500/10 to-violet-600/5' },
              { title: 'Procurement', icon: <Sparkles className="h-6 w-6 text-amber-600" />, desc: 'Identify savings opportunities across your entire supply chain.', color: 'from-amber-500/10 to-amber-600/5' },
              { title: 'Benefit Design', icon: <Users className="h-6 w-6 text-rose-600" />, desc: 'Structure formularies that prioritize cost-effective medications.', color: 'from-rose-500/10 to-rose-600/5' },
            ].map((feature, i) => (
              <div
                key={i}
                className="feature-card p-7 rounded-2xl border border-slate-100 bg-white"
              >
                <div className={`h-14 w-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SAVINGS BANNER ══════════ */}
      <section className="py-16 cta-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="animate-fade-in-up">
            <span className="inline-block text-primary-200 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-white/10 px-3 py-1 rounded-full">Enterprise Procurement Tool</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Reduce Pharmacy Spend by 80%</h2>
            <p className="text-green-100/80 mb-8 max-w-lg text-lg leading-relaxed">
              By leveraging MedPriceWatch's generic alternative engine, our enterprise clients see dramatic reductions in their prescription drug spending.
            </p>
            <button className="bg-white text-primary-800 px-7 py-3 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Learn More About Enterprise
            </button>
          </div>
          <div className="w-full lg:w-auto animate-fade-in-up delay-200">
            <div className="bg-white/10 backdrop-blur-sm p-7 rounded-2xl border border-white/20 min-w-[320px]">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-sm text-green-200/70">Current Spend</p>
                  <p className="text-3xl font-extrabold">$1.2M</p>
                </div>
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-green-300" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-200/70">Projected</p>
                  <p className="text-3xl font-extrabold text-green-300">$240k</p>
                </div>
              </div>
              <div className="h-3 bg-white/10 rounded-full mt-5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-300 w-1/5 rounded-full shadow-sm"></div>
              </div>
              <p className="text-xs text-green-200/50 text-center mt-3 font-medium">80% cost reduction projected</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TARGET AUDIENCES ══════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in-up">
            <p className="text-primary-600 text-sm font-bold tracking-widest uppercase mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Solutions for Everyone</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="h-6 w-6" />, title: 'For Patients', desc: 'Navigate complex pricing, find the lowest cost options, and advocate for your health.', gradient: 'from-primary-500 to-primary-600' },
              { icon: <Building2 className="h-6 w-6" />, title: 'For Employers', desc: 'Analyze PBM transparency, optimize benefits, and reduce corporate healthcare spend.', gradient: 'from-blue-500 to-blue-600' },
              { icon: <Stethoscope className="h-6 w-6" />, title: 'For Providers', desc: 'Prescribe cost-effective alternatives to improve patient adherence and outcomes.', gradient: 'from-accent-500 to-accent-600' },
              { icon: <Scale className="h-6 w-6" />, title: 'For Regulators', desc: 'Access granular data to enforce pricing transparency mandates and monitor compliance.', gradient: 'from-violet-500 to-violet-600' },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white p-7 rounded-2xl border border-slate-100 shadow-sm group">
                <div className={`h-12 w-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{item.desc}</p>
                <Link to="/" className="text-primary-600 text-sm font-semibold hover:text-primary-700 inline-flex items-center group/link">
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ REPORT VIOLATION CTA ══════════ */}
      <section className="py-14 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-6 hidden md:flex">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Witnessed a Price Violation?</h2>
              <p className="text-amber-100/90 text-lg">If a pharmacy is charging above mandated limits, report it confidentially.</p>
            </div>
          </div>
          <Link
            to="/report"
            className="bg-white text-amber-700 px-8 py-3.5 rounded-xl font-bold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap text-lg"
          >
            File a Report →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
