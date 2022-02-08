import { testingEnvironment } from "../../../testsEnv/testsEnv";
import { Button, Typography, Box, TextField, Card} from "@material-ui/core";
import DisplayTaskPage from "../TaskPagestore2";
import { mount, shallow } from "enzyme";
import Tasks from "../../../reducers/reducers_tasks";
import TaskForm from "../../TaskForm/TaskForm";
import { useSelector } from "react-redux";
import React from 'react';


// const initialState = {
//     tasks:{
//         tasks:Tasks
//     }
// }

// const {mountWrapper} = testingEnvironment(initialState,DisplayTaskPage);

// describe("DisplayTaskPage",()=>{
//     it("Should render correctly",()=>{
//         const wrapper = mountWrapper();
//         expect(wrapper).toMatchSnapshot();
//     });
// });

describe('<DisplayTaskPage />', () => {
    let appWrapper;
    const TaskPage = () => shallow(<DisplayTaskPage />, { });
it('renders a div', () => {
    // Dzięki metodzie first() sprawdzamy czy div jest pierwszym dzieckiem <App />
    expect(
      appWrapper
        .first()
        .type(),
    ).toBe('Box');
  });

  describe('the rendered div', () => {
    const box = () => appWrapper.first();

    it('contains everything else that gets rendered', () => {
      // Podczas wywoływania children() na wrapperze, enzyme pomija w wyszukiwaniu zewnętrzny węzeł. 
      // Dzięki temu możemy sprawdzić czy zawartość diva
      // faktycznie zawiera wszystko co renderuje <App />
      expect(box().children()).toEqual(appWrapper.children());
    });
  })
});