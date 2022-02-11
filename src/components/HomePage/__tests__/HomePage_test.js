import { testingEnvironment } from "../../../testsEnv/testsEnv";
import App from "../../App/App";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import SectionHowItWorks from "../Sections/SectionHowItWorks";
import SectionTheBestVolunteers from "../Sections/SectionTheBestVolunteers";
import SectionHowFindHelp from "../Sections/SectionHowFindHelp";
import SectionInNumbers from "../Sections/SectionInNumbers/SectionInNumbers";
import SectionNewTasks from "../Sections/SectionNewTasks";

const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </MemoryRouter>
  );

describe("HomePage",()=>{
    it("Should render correctly",()=>{
         expect(wrapper).toMatchSnapshot();
    });
});


