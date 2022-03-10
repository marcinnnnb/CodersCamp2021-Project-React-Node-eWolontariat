import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SectionInNumbers from "../SectionInNumbers";

describe("SectionInNumbers",()=>{
    it("Should render SectionInNumbers correctly",()=>{
        const wrapper = shallow(<SectionInNumbers/>);
        expect(toJson(wrapper)).toMatchSnapshot();

    });
});