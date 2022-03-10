import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HomePage from "../HomePage";

describe("HomePage",()=>{

    it("Should render TasksPage correctly",()=>{
        const wrapper = shallow(<HomePage/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});