import globalStyles from "./global.module.css";

import Introduction from './components/introduction/Introduction';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import NonTechPortfolio from './components/non-tech-portfolio/NonTechPortfolio';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div style={{width: "100%", height: "100%", position: "relative"}}>
      <Introduction />
      <About />
      
      <div className={globalStyles['spacer'] + " " + globalStyles['layer-about-work']} />
      <Portfolio />
      <div className={globalStyles['spacer'] + " " + globalStyles['layer-work-non-tech']} />
      <NonTechPortfolio />
      <div className={globalStyles['spacer'] + " " + globalStyles['layer-non-tech-contact']} />
      <Contact />
    </div>
  );
}

export default App;
