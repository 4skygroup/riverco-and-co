import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import de nos composants de layout
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import ScrollToTop from './components/layouts/ScrollToTop';

// Import de nos pages
import Home from './pages/Home';
import Externalisation from './pages/Externalisation';

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
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>

                <Footer />

            </div>
        </Router>
    );
}

export default App;