import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SectionHero from "../SectionHero";

describe("SectionHero",()=>{
    it("Should render SectionHero correctly",()=>{
        const wrapper = shallow(<SectionHero/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});