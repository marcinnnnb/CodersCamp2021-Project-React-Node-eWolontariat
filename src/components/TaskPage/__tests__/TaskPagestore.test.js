import { testingEnvironment } from "../../../testsEnv/testsEnv";
import TaskPagestore from "../TaskPagestore";
import Tasks from "../../../reducers/reducers_tasks";


const initialState = {
    tasks:{
        tasks:Tasks
    }
}

const {shallowWrapper} = testingEnvironment(initialState,TaskPagestore);

describe("TaskPagestore",()=>{
    it("Should render correctly",()=>{
        const wrapper = shallowWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
