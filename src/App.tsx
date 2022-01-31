import React from 'react';
import Introduction from './introduction/Introduction';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import NonTechPortfolio from './non-tech-portfolio/NonTechPortfolio';
function App() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <Introduction />
      <About />
      <Portfolio />
      <NonTechPortfolio />
    </div>
  );
}

export default App;
