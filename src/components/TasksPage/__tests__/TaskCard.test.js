import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store/store";
import { createTheme, ThemeProvider } from "@material-ui/core";
import TaskCard from "../TaskCard";

describe("TaskCard",()=>{
    const theme = createTheme ({
        palette: {
          tertiary: {
            main: 'red',
            contrastText: 'blue',
            dark: 'white',
          }
        }});
    const task = {
        categories: ["Potato"],
    };
    const wrapper = mount(
        <BrowserRouter>
             <Provider store ={store}>
                <ThemeProvider theme={theme}>
                    <TaskCard task={task}/>
                </ThemeProvider>
             </Provider>
        </BrowserRouter>
      );

    it("Should render TaskCard correctly",()=>{
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});