import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import de nos composants de layout
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import ScrollToTop from './components/layouts/ScrollToTop';

// Import de nos pages
import Home from './pages/Home';
import Externalisation from './pages/Externalisation';
import Methodologie from './pages/Methodologie';
import Outils from './pages/Outils';
import Localisation from './pages/Localisation';
import Recrutement from './pages/Recrutement';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AgenceDeProspection from './pages/services/AgenceDeProspection';
import ProspectionExternalisee from './pages/services/ProspectionExternalisee';
import StrategieCommerciale from './pages/services/StrategieCommerciale';
import InboundMarketing from './pages/services/Marketing';
import CallCenterB2B from './pages/services/CallCenterB2B';
import ConsultingCommercial from './pages/services/ConsultingCommercial';

function App() {
    return (
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className=" min-h-screen flex flex-col">
            {/* Le Header reste visible sur toutes les pages */}
            <Header />

            {/* Le main prend l'espace restant et gère le changement de pages */}
            <main className="grow w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/externalisation" element={<Externalisation />} />
                <Route path="/localisation" element={<Localisation />} />
                <Route path="/methodologie" element={<Methodologie />} />
                <Route path="/outils" element={<Outils />} />
                <Route path="/recrutement" element={<Recrutement />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/services/agence-de-prospection"
                  element={<AgenceDeProspection />}
                />
                <Route
                  path="/services/call-center-b2b"
                  element={<CallCenterB2B />}
                />
                <Route
                  path="/services/consulting-commercial"
                  element={<ConsultingCommercial />}
                />
                <Route
                  path="/services/inbound-marketing"
                  element={<InboundMarketing />}
                />
                <Route
                  path="/services/prospection-externalisee"
                  element={<ProspectionExternalisee />}
                />
                <Route
                  path="/services/strategie-commerciale"
                  element={<StrategieCommerciale />}
                />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    );
}

export default App;