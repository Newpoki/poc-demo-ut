/**
 * The counter slice state
 * This is, in "classic" redux, called the counter reducer state
 */
export type CounterSliceState = {
  count: number;
};

/**
 * The `couterSlice.actions.add` payload type
 */
export type CounterAddActionPayload = {
  value: number;
};

/**
 * The `couterSlice.actions.substract` payload type
 */
export type CounterSubstractActionPayload = {
  value: number;
};
