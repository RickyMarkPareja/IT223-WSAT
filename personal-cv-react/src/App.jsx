import Header from "./components/Header"; 
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";


function App() {

  return (
    <div className="container">
        <Header />
        <About />
        <Skills />
        <Education />
        <Contact />

        <footer>
        <p>&copy; 2026 Ricky Mark Pareja. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
