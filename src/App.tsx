import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";


function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">
                <h1 className="text-white text-center mt-20">Bienvenue sur Riverco & Co</h1>
            </main>
            <Footer />
        </div>
    );
}

export default App;