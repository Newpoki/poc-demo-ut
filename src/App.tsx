import { useCallback } from "react";
import { Button } from "./components/Button";
import { selectCount } from "./redux/counter/counterSelectors/selectCount";
import { counterActions } from "./redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";

const App = () => {
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
    <div className="App">
      <Button onClick={handleDecrement}>Decrement</Button>

      <input type="number" value={count} readOnly />

      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
};

export default App;
