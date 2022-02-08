import { testingEnvironment } from "../../testsEnv/testsEnv";
import {useForm, Controller} from 'react-hook-form';
import { Button, TextField } from "@material-ui/core";
import { mount, shallow } from "enzyme";
import { act, render, fireEvent, screen, waitFor, cleanup} from "@testing-library/react";
import { getByLabelText} from '@testing-library/dom'
import { addNewTask } from "../../store/taskSlice";
import {TaskForm} from './TaskForm';
import { Provider } from 'react-redux';
import {store} from '../../store/store';



import { useDispatch } from "react-redux";

const { shallowWrapper, mountWrapper, defaultStore } = testingEnvironment({},TaskForm);

describe("TaskForm", () => {
it('includes input', () => {
  const app = shallow(<TaskForm />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});
})



// describe("TaskForm", () => {
//     beforeEach(() => {
//         defaultStore.clearActions();
//       });
  
  // it("Should render correctly", () => {
  //   const wrapper = shallowWrapper();
  //   expect(wrapper).toMatchSnapshot();
  // });
  // it("Should dispatch action on add new task", () => {
  //   const wrapper = mountWrapper();
  //   act(() => {
  //     wrapper
  //       .find(TextField)
  //       .props()
  //       .onChange({ target: { value: "test" } });
  //   });
  //   wrapper.update();
  //   wrapper.find(Button).simulate("click");
  //   expect(defaultStore.getActions()[0].type).toEqual(addNewTask.type);
  // });

// const onSubmit= jest.fn();

// render(<TaskForm onSubmit={onSubmit} />);

// it('onSubmit is called',()=>{
//     const addtitle=screen.getByRole('Button',
//     {    title: addtitle})
// });

//  it('calls the onSubmit function', ()=>{
    
 
//     fireEvent.click(screen.getByRole("Button"));

//      expect(onSubmit).toHaveBeenCalled()
     
//  })



// });


// const Enzyme = require("enzyme");
// const Adapter = require("enzyme-adapter-react-16");

// Enzyme.configure({ adapter: new Adapter() });

// describe("TaskForm", () => {
//   it("submits input values", async () => {
//     const onSubmit = jest.fn();
//     const rendered = mount(<TaskForm onSubmit={onSubmit} />);

//     await act(async () => {
//       rendered
//         .find('Textfield[name="title"]')
//         .simulate("Textfield", { value: "Hooray!" })
//         .simulate("blur");
//     });

//     await act(async () => {
//       rendered.find("form").simulate("submit");
//     });

//     expect(onSubmit).toHaveBeenLastCalledWith(
//       expect.objectContaining({
//         title: "Hooray!"
//       })
//     );
//   });
// });


// describe.only("TaskForm", () => {
//   test("should watch input correctly", () => {
//     const { getByLabelText } = render(TaskForm );

//     fireEvent.TextField(screen.getByLabelText("tytul"), {
//       target: {
//         value: "test"
//       }
//     });
//   })
// })


// afterEach(() => {
//   jest.resetAllMocks();
//   cleanup();
// });

// const mockPostTask = jest.fn(() => true);

// test("renders Form without crashing", async () => {
//   const { getByText, getByTestId } = render(
//     <Provider store ={store}>
//       <TaskForm postUser={mockPostTask} />
//     </Provider>
//   );
//   const submitButton = screen.getByText(/submit/i);

//   // await waitFor(() => expect(submitButton).toHaveBeenCalled());
//   fireEvent.input(screen.getByName("title"), { target: { value: "abcdef" } });
//   fireEvent.input(screen.getByName("amount"), { target: { value: "12" } });

//   await waitFor(() => expect(submitButton).not.toBeDisabled());
// })
