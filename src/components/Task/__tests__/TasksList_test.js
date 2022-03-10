import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import TasksList from "../TasksList";

const tasksListWrapper = () => {
  return (
    <Provider store={store}> 
      <TasksList /> 
    </Provider>
  )
}

describe("TasksList",()=>{

    it("Show reender TasksList correctly", ()=>{
      expect(toJson(tasksListWrapper)).toMatchSnapshot();
      });

    it("Should filter tasks list correctly", ()=>{
     
      //expect(tasksListWrapper.instance().getFilteredTextFromButton([])).toEqual([]);
    })

});