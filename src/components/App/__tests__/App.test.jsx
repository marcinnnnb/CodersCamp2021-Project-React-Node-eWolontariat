import { testingEnvironment } from "../../../testsEnv/testsEnv";
import App from "../App";

const {shallowWrapper} = testingEnvironment({},App);

describe("App",()=>{
    it("Should render correctly",()=>{
        const wrapper = shallowWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
