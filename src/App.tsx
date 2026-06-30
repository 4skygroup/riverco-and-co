import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import de nos composants de layout
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

// Import de nos pages
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className=" min-h-screen flex flex-col">

                {/* Le Header reste visible sur toutes les pages */}
                <Header />

                {/* Le main prend l'espace restant et gère le changement de pages */}
                <main className="grow w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* <Route path="/contact" element={<Contact />} /> */}

                        {/* Optionnel : Une route 404 pour rediriger vers l'accueil si l'URL n'existe pas */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>

                <Footer />

            </div>
        </Router>
    );
}

export default App;