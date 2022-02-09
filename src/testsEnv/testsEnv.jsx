import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { mount, shallow } from "enzyme";
import * as ReactReduxHooks from "react-redux";

export const testingEnvironment = (defaultStoreState, Component) => {
    const defaultStore = configureStore([thunk])(defaultStoreState);
    const useSelectorSpy = jest.spyOn(ReactReduxHooks, "useSelector");
    const useDispatch = jest.spyOn(ReactReduxHooks, "useDispatch");
  
  
    const shallowWrapper = (store = defaultStore, props) => {
      useSelectorSpy.mockImplementation((state) => state(store.getState()));
      useDispatch.mockImplementation(() => store.dispatch);
  
      return shallow(<Component {...props} />);
    };
  
    const mountWrapper = (store = defaultStore, props) => {
      useDispatch.mockRestore();
  
      return mount(
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );
    };
    return { defaultStore, shallowWrapper, mountWrapper };
  };