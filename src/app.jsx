import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Process from './sections/Process.jsx';
import RequestForm from './sections/RequestForm.jsx';
import Location from './sections/Location.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <RequestForm />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}