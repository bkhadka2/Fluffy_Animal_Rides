import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Animal from "./components/Animal/Animal";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import EndDesign from "./components/EndDesign/EndDesign";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Animal />
        <Service />
        <section>
          <About />
        </section>
        <footer>
          <Footer />
          {/* <EndDesign /> */}
        </footer>
      </main>
    </>
  );
}

export default App;
