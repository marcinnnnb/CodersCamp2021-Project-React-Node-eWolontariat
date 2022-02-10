import { Button } from "@material-ui/core";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../../store/store";
import App from "../../../App/App";
import TasksList from "../../../Task/TasksList";
import TaskCard from "../../../TasksPage/TaskCard";

describe("SectionNewTasks",()=>{

    
  it("Should render task card and should allow dispatch fun", ()=>{
    const wrapper = mount(
      <MemoryRouter initialEntries={["/tasks"]}>
        <Provider store={store}>
          <App/>
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(TaskCard).find(Button).length).toEqual(0);

  });

});