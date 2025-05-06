import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AuthDocumentation from './pages/AuthDocumentation';
import PatientDocumentation from './pages/PatientDocumentation';
import BookingDocumentation from './pages/BookingDocumentation';
import ProcessDocumentation from './pages/ProcessDocumentation';
import ImplementationGuide from './pages/ImplementationGuide'
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<AuthDocumentation />} />
          <Route path="/patient-management" element={<PatientDocumentation />} />
          <Route path="/guide" element={<ImplementationGuide />} />
          <Route path="/Documentation" element={<Documentation/>} />
          <Route path="/booking-management" element={<BookingDocumentation />} />
          <Route path="/process-management" element={<ProcessDocumentation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;