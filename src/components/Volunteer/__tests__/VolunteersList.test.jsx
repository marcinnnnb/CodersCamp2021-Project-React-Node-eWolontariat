import { testingEnvironment } from "../../../testsEnv/testsEnv";
import VolunterList from "../VolunteersList";
import wolontariusze from "../../../assets/data/wolontariusze.json";

const defaultState = {
    volunteers:{
        volunteers:wolontariusze
    }
}

const {shallowWrapper} = testingEnvironment(defaultState,VolunterList)

describe("VolunteersList",()=>{
    it("Should render correctly",()=>{
        const wrapper = shallowWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
