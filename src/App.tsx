import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";


function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;