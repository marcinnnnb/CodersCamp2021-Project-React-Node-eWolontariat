import { Button, createTheme, ThemeProvider } from "@material-ui/core";
import { mount, render } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import SectionHowItWorks from "../SectionHowItWorks";
import TaskForm from "../../../TaskForm/TaskForm";

describe("SectionHowItWorks",()=>{

    const theme = createTheme ({
      palette: {
        tertiary: {
          main: 'red',
          contrastText: 'blue',
          dark: 'white',
        }
      }});

    const wrapper = mount(
      <BrowserRouter >
          <ThemeProvider theme={theme}>
              <SectionHowItWorks/>
          </ThemeProvider>
      </BrowserRouter>
    );

    it("Should render SectionHowItWorks correctly",()=>{
        expect(toJson(wrapper)).toMatchSnapshot();
    });
  
});