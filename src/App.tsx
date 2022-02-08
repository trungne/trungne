import globalStyles from "./global.module.css";

import Introduction from './introduction/Introduction';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import NonTechPortfolio from './non-tech-portfolio/NonTechPortfolio';
import Contact from './contact/Contact';


function App() {
  return (
    <div style={{width: "100%", height: "100%", position: "relative"}}>
      <Introduction />
      <About />
      <Portfolio />
      <NonTechPortfolio />
      <Contact />
    </div>
  );
}

export default App;
