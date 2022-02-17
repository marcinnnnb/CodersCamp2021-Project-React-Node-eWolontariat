import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SectionHowFindHelp from "../SectionHowFindHelp";

describe("SectionHowFindHelp",()=>{
    it("Should render SectionHowFindHelp correctly",()=>{
        const wrapper = shallow(<SectionHowFindHelp/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});