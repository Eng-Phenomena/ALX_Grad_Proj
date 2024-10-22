/**
 * Components
 */
import Header from "./components/Header";
import Figure from "./components/Figure";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
      <Header />
      <main>
        <Figure />
        <About />
        <Skills />
        <Work />
        <Review />
        <br/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;