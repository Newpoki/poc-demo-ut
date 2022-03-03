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

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div className="App">
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>

      <input type="text" value={count} readOnly />

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default App;
