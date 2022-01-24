import SectionHero from "./SectionHero";
import SectionTheBestVolunteers from "./SectionTheBestVolunteers";
import SectionHowFindHelp from "./SectionHowFindHelp";
import SectionInNumbers from "./SectionInNumbers";
import SectionHowItWorks from "./SectionHowItWorks";
import SectionNewTasks from "./SectionNewTasks";

const HomePage = () => {
    return(
        <>
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