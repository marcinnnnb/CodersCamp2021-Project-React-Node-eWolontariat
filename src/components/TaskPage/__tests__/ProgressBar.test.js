import { testingEnvironment } from "../../../testsEnv/testsEnv";
import ProgressBar from "../ProgressBar"

const {shallowWrapper} = testingEnvironment({},ProgressBar);

describe("ProgressBar",()=>{
    it("Should render correctly",()=>{
        const wrapper = shallowWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});