import { useCallback } from "react";
import { selectCount } from "../redux/counter/counterSelectors/selectCount";
import { counterActions } from "../redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

/**
 * A simple hook that access the redux counter reducer,
 * and expose the actions and the value
 */
export const useCounter = () => {
  const value = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleDecrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  const handleIncrement = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const handleAdd = useCallback(
    (value: number) => {
      dispatch(counterActions.add({ value }));
    },
    [dispatch]
  );

  const handleSubstract = useCallback(
    (value: number) => {
      dispatch(counterActions.substract({ value }));
    },
    [dispatch]
  );

  return {
    value,
    increment: handleIncrement,
    decrement: handleDecrement,
    add: handleAdd,
    substract: handleSubstract,
  };
};
