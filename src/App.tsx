
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Commissions from './components/Commissions';
import HowItWorks from './components/HowItWorks';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Commissions />
        <HowItWorks />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}

export default App;
