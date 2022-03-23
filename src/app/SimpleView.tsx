import { useCallback } from "react";
import { selectCount } from "../redux/counter/counterSelectors/selectCount";
import { counterActions } from "../redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

import * as Styled from "./SimpleView.styles";
import * as StyledApp from "./App.styles";

export const SimpleView = () => {
  /**
   * In order to be intercepted by redux, the actions needs to be dispatched.
   * This function takes in parameters the dispatched action
   * This is much more conveniant and the recommended way since
   * hooks were implemented in React 16.8
   */
  const dispatch = useAppDispatch();

  /** Accessing the whole store data through the hook `useAppSelector`
   * It tooks a callback with one parameter being the whole store state
   */
  const count = useAppSelector(selectCount);

  const handleDecrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  const handleIncrement = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  return (
    <Styled.Root id="cy_simple_view">
      <StyledApp.Button onClick={handleDecrement} id="cy_simple_view_decrement_button">
        Decrement
      </StyledApp.Button>

      <StyledApp.Input type="number" value={count} readOnly id="cy_simple_view_count_input" />

      <StyledApp.Button onClick={handleIncrement} id="cy_simple_view_increment_button">
        Increment
      </StyledApp.Button>
    </Styled.Root>
  );
};
