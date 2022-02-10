import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import TasksList from "../TasksList";

const TasksListWrapper = () => {

  return (
    <Provider store={store}> 
      <TasksList /> 
    </Provider>
  )
}

describe("TasksList",()=>{

    it("Show reender correctly", ()=>{
        expect(toJson(TasksListWrapper)).toMatchSnapshot();
      });

});