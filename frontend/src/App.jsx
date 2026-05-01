import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Compare from './pages/Compare';
import GenericGuide from './pages/GenericGuide';
import About from './pages/About';
import SmartRxOptimizer from './pages/SmartRxOptimizer';

import StoreLocator from './pages/StoreLocator';
import ReportViolation from './pages/ReportViolation';
import PriceAlert from './pages/PriceAlert';

import AdminDashboard from './pages/AdminDashboard';
import RegulatoryCompliance from './pages/RegulatoryCompliance';
import Insights from './pages/Insights';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="compare" element={<Compare />} />
        <Route path="guide" element={<GenericGuide />} />
        <Route path="optimizer" element={<SmartRxOptimizer />} />
        <Route path="about" element={<About />} />
        <Route path="locator" element={<StoreLocator />} />
        <Route path="report" element={<ReportViolation />} />
        <Route path="alerts" element={<PriceAlert />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="compliance" element={<RegulatoryCompliance />} />
        <Route path="insights" element={<Insights />} />
      </Route>
    </Routes>
  );
}

export default App;
