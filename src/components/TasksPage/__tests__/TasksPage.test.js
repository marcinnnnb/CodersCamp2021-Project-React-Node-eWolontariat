import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store/store";
import TasksPage from "../TasksPage";
import { Button, createTheme, ThemeProvider } from "@material-ui/core";

describe("TasksPage",()=>{
    const theme = createTheme ({
        palette: {
          tertiary: {
            main: 'red',
            contrastText: 'blue',
            dark: 'white',
          }
        }});
    const wrapper = mount(
        <BrowserRouter>
             <Provider store ={store}>
                <ThemeProvider theme={theme}>
                    <TasksPage/>
                </ThemeProvider>
             </Provider>
        </BrowserRouter>
      );  

    it("Should render TasksPage correctly",()=>{
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("Should show next Task Card correctly",()=>{
        
        expect(wrapper.find(TasksPage).find('[id="show-more-card-button"]').find(Button).length).toEqual(1);
        wrapper.find(TasksPage).find('[id="show-more-card-button"]').find(Button).simulate('click');
        //fix button
        expect(wrapper.find(TasksPage).find('[id="show-more-card-button"]').find(Button).length).toEqual(0);
     
    });
});