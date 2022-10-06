import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return <main id="main-content">
    <AboutContainer/>
    <TechnologiesContainer/>
    <ProjectsContainer/>
    
    MainContent</main>
};

export default MainContent;