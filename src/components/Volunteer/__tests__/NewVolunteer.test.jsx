import { testingEnvironment } from "../../../testsEnv/testsEnv";
import NewVolunteer from "../NewVolunteer";
import { Button, TextField } from "@material-ui/core";
import { act } from "@testing-library/react";
import { addNewVolunteer } from "../../../store/volunteerSlice";

const { shallowWrapper, mountWrapper, defaultStore } = testingEnvironment(
  {},
  NewVolunteer
);

describe("NewVolunteer", () => {
  beforeEach(() => {
    defaultStore.clearActions();
  });
  it("Should render correctly", () => {
    const wrapper = shallowWrapper();
    expect(wrapper).toMatchSnapshot();
  });
  it("Should dispatch action on add new volunteer", () => {
    const wrapper = mountWrapper();
    act(() => {
      wrapper
        .find(TextField)
        .props()
        .onChange({ target: { value: "test" } });
    });
    wrapper.update();
    wrapper.find(Button).simulate("click");
    expect(defaultStore.getActions()[0].type).toEqual(addNewVolunteer.type);
  });
});
