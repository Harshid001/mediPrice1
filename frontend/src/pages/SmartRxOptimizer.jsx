import { useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle2, Search, ArrowRight, Pill, TrendingDown, ShieldCheck, MapPin, CreditCard, AlertTriangle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartRxOptimizer = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulating the processing of the prescription
  useEffect(() => {
    if (step === 2) {
      setIsProcessing(true);
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setIsProcessing(false);
            setStep(3);
            return 100;
          }
          return p + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleUpload = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">SmartRx Auto-Optimizer</h1>
          <p className="text-xl text-slate-600">Scan your prescription, find safe generic alternatives, check your eligibility, and locate the nearest store in seconds.</p>
        </div>

        {/* Stepper */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 transition-all duration-500 ease-in-out -z-10" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          
          {[
            { num: 1, label: 'Upload Rx' },
            { num: 2, label: 'Processing' },
            { num: 3, label: 'Generic Matches' },
            { num: 4, label: 'Smart Routing' }
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= s.num ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-500'}`}>
                {step > s.num ? <CheckCircle2 className="w-6 h-6" /> : s.num}
              </div>
              <span className={`mt-2 text-xs font-medium ${step >= s.num ? 'text-blue-600' : 'text-gray-500'}`}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[400px]">
          
          {/* STEP 1: UPLOAD */}
          {step === 1 && (
            <div className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Upload className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Upload your Prescription</h2>
              <p className="text-slate-500 mb-8 max-w-md">Take a photo of your doctor's handwritten prescription or upload a digital PDF to begin optimization.</p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl w-full max-w-lg p-8 hover:bg-gray-50 hover:border-blue-400 transition-colors cursor-pointer group" onClick={handleUpload}>
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                <p className="text-slate-600 font-medium">Drag and drop your file here</p>
                <p className="text-sm text-slate-400 mt-1">or click to browse</p>
                <button className="mt-6 bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 w-full transition-colors">
                  Select File
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PROCESSING */}
          {step === 2 && (
            <div className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Analyzing Prescription...</h2>
              
              <div className="w-full max-w-md bg-gray-200 rounded-full h-2 mb-4 mt-8">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
              </div>
              
              <div className="flex flex-col space-y-3 mt-4 text-left w-full max-w-sm">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className={`w-5 h-5 mr-3 ${progress > 20 ? 'text-green-500' : 'text-gray-300'}`} />
                  Reading handwriting via OCR...
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className={`w-5 h-5 mr-3 ${progress > 50 ? 'text-green-500' : 'text-gray-300'}`} />
                  Matching with Jan Aushadhi database...
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className={`w-5 h-5 mr-3 ${progress > 80 ? 'text-green-500' : 'text-gray-300'}`} />
                  Calculating optimal generic alternatives...
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: RESULTS */}
          {step === 3 && (
            <div className="p-0 h-full min-h-[400px]">
              <div className="bg-green-50 p-6 border-b border-green-100 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Optimization Complete!</h2>
                  <p className="text-green-800">We found high-quality generic alternatives for your prescription.</p>
                </div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-center shadow-sm">
                  <p className="text-xs uppercase font-bold opacity-80">Total Savings</p>
                  <p className="text-2xl font-bold">₹845.00</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-semibold mb-1">PRESCRIBED BRAND</p>
                        <p className="text-lg font-bold text-slate-900 line-through decoration-red-400">Augmentin 625 Duo</p>
                        <p className="text-sm text-slate-600">Amoxicillin + Clavulanic Acid • ₹201.50</p>
                      </div>
                      
                      <div className="hidden md:flex justify-center text-gray-400 px-4">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-blue-600 font-bold flex items-center"><ShieldCheck className="w-3 h-3 mr-1"/> JAN AUSHADHI GENERIC</p>
                          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded flex items-center"><TrendingDown className="w-3 h-3 mr-1"/> -75%</span>
                        </div>
                        <p className="text-lg font-bold text-blue-900">Amoxycillin & Pot. Clavulanate</p>
                        <p className="text-sm text-blue-700 font-medium">₹50.00 <span className="text-xs font-normal text-blue-500">(Save ₹151.50)</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-semibold mb-1">PRESCRIBED BRAND</p>
                        <p className="text-lg font-bold text-slate-900 line-through decoration-red-400">Lipitor 20mg</p>
                        <p className="text-sm text-slate-600">Atorvastatin • ₹720.00</p>
                      </div>
                      
                      <div className="hidden md:flex justify-center text-gray-400 px-4">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-blue-600 font-bold flex items-center"><ShieldCheck className="w-3 h-3 mr-1"/> PMBJP GENERIC</p>
                          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded flex items-center"><TrendingDown className="w-3 h-3 mr-1"/> -96%</span>
                        </div>
                        <p className="text-lg font-bold text-blue-900">Atorvastatin Calcium Tabs 20mg</p>
                        <p className="text-sm text-blue-700 font-medium">₹26.50 <span className="text-xs font-normal text-blue-500">(Save ₹693.50)</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button onClick={() => setStep(4)} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center transition-colors shadow-md">
                    Proceed to Checkout Options <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: ROUTING */}
          {step === 4 && (
            <div className="p-8 h-full min-h-[400px]">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fulfillment & Subsidies</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-slate-900">Nearby Jan Aushadhi Kendras</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">We found 2 government stores within 5km that have your exact generics in stock right now.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-white p-3 rounded border border-gray-200 shadow-sm flex justify-between items-center">
                      <div>
                        <p className="font-bold text-sm text-slate-800">PMBJP Store - Kengeri</p>
                        <p className="text-xs text-green-600 font-medium mt-0.5">In Stock • 1.2 km away</p>
                      </div>
                      <Link to="/locator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Get Directions</Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <CreditCard className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-slate-900">Auto-Apply Schemes</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">You are eligible for the PM-JAY Ayushman Bharat scheme which covers these meds 100%.</p>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                    <p className="text-sm font-medium text-green-800">Your out-of-pocket cost is now:</p>
                    <p className="text-3xl font-extrabold text-green-600 mt-1">₹0.00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Pharmacy overcharging? <Link to="/report" className="font-bold underline ml-1">Report instantly.</Link>
                </div>
                <button onClick={() => setStep(1)} className="text-slate-500 hover:text-slate-800 font-medium px-4 py-2 transition-colors">
                  Scan Another Rx
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SmartRxOptimizer;
