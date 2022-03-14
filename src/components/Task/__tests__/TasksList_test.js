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

    it("Should reender TasksList correctly", ()=>{
      expect(toJson(tasksListWrapper)).toMatchSnapshot();
      });

    it("Should filter tasks list correctly", ()=>{
     
      //expect(tasksListWrapper.instance().getFilteredTextFromButton([])).toEqual([]);
    });

    it("Should get tasks list correctly from Api", () =>{
        const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
          json: () => Promise.resolve({
            tasks: [
              {id:1, title: "Black Widow"},
              {id:3, title: "Kapitan Marvel"},
              {id:4, title: "Iron Man"},
            ]
          })
        }));
        expect.assertions(1);

        //dopisać jeszcze wywołanie fetcha 
        
          expect(mockFetch.mock.calls.length).toBe(1);
          expect(mockFetch).toBeCalledWith('https://api.npoint.io/8d11637b99831903048a');
       
    });
});