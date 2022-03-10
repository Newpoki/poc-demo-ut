import { configureStore } from "@reduxjs/toolkit";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";

import { RootState, storeReducer } from "../../../redux/store";
import { mockedStoreState } from "../data/storeState";

/** Typings comes from the real `@testing-library/react` render function
 * This is highly inspired by this documentation : https://redux.js.org/usage/writing-tests#connected-components
 * which is referenced on the official `@testling-library` for the react-redux doc: https://testing-library.com/docs/example-react-redux/
 *
 * There is just few things changed that I think improve the usage a bit, like the fact that
 * we can provide a default
 */
const render = (
  ui: ReactElement<any, string | React.JSXElementConstructor<any>>,
  preloadedState: Partial<RootState> = {}
) => {
  const store = configureStore({
    reducer: storeReducer,
    preloadedState: { ...mockedStoreState, ...preloadedState },
  });

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper });
};

export * from "@testing-library/react";

export { render };
