import { Eye, Shield, Users, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-gray-50 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transparency in Healthcare Pricing</h1>
          <p className="text-lg text-slate-600 mb-16">
            We are on a mission to democratize pharmaceutical data, ensuring every patient and provider has access to fair, market-driven pricing information.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">4.2M+</p>
              <p className="text-sm text-slate-500 font-medium">Prices Tracked Daily</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-800 mb-2">850+</p>
              <p className="text-sm text-slate-500 font-medium">Verified Pharmacies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">$120M</p>
              <p className="text-sm text-slate-500 font-medium">User Savings to Date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm">
              <Eye className="h-8 w-8 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Radical Transparency</h3>
              <p className="text-slate-600">Unveiling the hidden costs behind prescription medication to empower consumers with factual data.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm">
              <Shield className="h-8 w-8 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Integrity</h3>
              <p className="text-slate-600">Our proprietary algorithms verify every price point against direct pharmacy feeds and manufacturer reports.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm">
              <Users className="h-8 w-8 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community Focused</h3>
              <p className="text-slate-600">Building tools that serve the vulnerable by identifying the lowest cost options for life-saving drugs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 ring-4 ring-green-100"></div>
                <h4 className="font-bold text-slate-900">2023 Q1</h4>
                <p className="text-sm text-slate-500">Platform Launch</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 ring-4 ring-green-100"></div>
                <h4 className="font-bold text-slate-900">2023 Q3</h4>
                <p className="text-sm text-slate-500">1M Prices Tracked</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 ring-4 ring-green-100"></div>
                <h4 className="font-bold text-slate-900">2024 Q1</h4>
                <p className="text-sm text-slate-500">Partner Affiliates</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 ring-4 ring-green-100"></div>
                <h4 className="font-bold text-slate-900">Present</h4>
                <p className="text-sm text-slate-500">Nationwide Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Leadership Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             {[
               { name: 'Dr. Marcus Chen', role: 'Chief Medical Officer', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
               { name: 'Sarah Jenkins', role: 'Head of Data Science', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
               { name: 'David Rivera', role: 'Director of Operations', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
               { name: 'Elena Voigt', role: 'Public Policy Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
             ].map((leader, i) => (
               <div key={i}>
                 <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4 bg-gray-200">
                   <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                 </div>
                 <h4 className="font-bold text-slate-900">{leader.name}</h4>
                 <p className="text-xs text-slate-500">{leader.role}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 mb-8">Have questions about our data or interested in a partnership? Our team is here to help.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm">transparency@medipricewatch.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Office</h4>
                    <p className="text-slate-600 text-sm">1200 Healthcare Plaza, Boston, MA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50" placeholder="Tell us more..."></textarea>
                </div>
                <button type="button" className="w-full bg-green-700 text-white font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
