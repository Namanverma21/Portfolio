import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from './components/Education';
import ContactMe from './components/ContactMe'


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
  
      
      <ContactMe/>
    </div>
  );
}

export default App;
