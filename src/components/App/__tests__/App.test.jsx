import { testingEnvironment } from "../../../testsEnv/testsEnv";
import App from "../App";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../../store/store';
import HomePage from "../../HomePage/HomePage";

const {shallowWrapper} = testingEnvironment({},App);

describe("App",()=>{
    it("Should render correctly",()=>{
        const wrapper = shallowWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});

