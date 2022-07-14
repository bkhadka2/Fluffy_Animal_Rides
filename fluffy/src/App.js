import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Animal from "./components/Animal/Animal";
import Service from "./components/Service/Service";
import About from "./components/About/About";

function App() {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Animal />
        <section>
          <Service />
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
