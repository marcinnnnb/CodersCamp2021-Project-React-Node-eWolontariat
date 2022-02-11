import SectionHero from "./Sections/SectionHero";
import SectionTheBestVolunteers from "./Sections/SectionTheBestVolunteers";
import SectionHowFindHelp from "./Sections/SectionHowFindHelp";
import SectionInNumbers from "./Sections/SectionInNumbers/SectionInNumbers";
import SectionHowItWorks from "./Sections/SectionHowItWorks";
import SectionNewTasks from "./Sections/SectionNewTasks";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const HomePage = () => {
    return(
        <>
        <ScrollToTopOnMount />
        <SectionHero/>
        <SectionHowItWorks/>
        <SectionNewTasks/>
        <SectionTheBestVolunteers/>
        <SectionHowFindHelp/>
        <SectionInNumbers/>
        </>
    )
}

export default HomePage;