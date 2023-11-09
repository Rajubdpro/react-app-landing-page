import { useState } from 'react'
import './index.css';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './assets/images/about.png';
import aboutimage1 from './assets/images/download.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import Footer from './Components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Feature />
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button="Get The App" />
      <Presentation />
      <div id="download">
        <About image={aboutimage1} title='Download And Get The App' button="Download" />
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
