import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className=" min-h-screen flex flex-col">

                {/* Le Header reste visible sur toutes les pages */}
                <Header />

                {/* Le main prend l'espace restant et gère le changement de pages */}
                <main className="grow w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/externalisation" element={<Externalisation />} />
                        <Route path="/localisation" element={<Localisation />} />
                        <Route path="/methodologie" element={<Methodologie />} />
                        <Route path="/outils" element={<Outils />} />
                        <Route path="/recrutement" element={<Recrutement />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>

                <Footer />

            </div>
        </Router>
    );
}

export default App;