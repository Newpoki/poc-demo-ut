import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Button } from "./components/Button";
import { useCounter } from "./hooks/useCounter";
import { isValidNumber } from "./utils/isValidNumber";

const baseId = "cy_advanced_view";

export const AdvancedView = () => {
  const { value, add, substract } = useCounter();
  const [addedValue, setAddedValue] = useState("1");

  const isValidAddedValue = useMemo(() => isValidNumber(addedValue), [addedValue]);

  const handleAddedValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setAddedValue(value);
  }, []);

  const handleAddButtonClick = useCallback(() => {
    add(Number(addedValue));
  }, [add, addedValue]);

  const handleSubstractButtonClick = useCallback(() => {
    substract(Number(addedValue));
  }, [substract, addedValue]);

  return (
    <div id={baseId}>
      <Button
        onClick={handleSubstractButtonClick}
        id={`${baseId}_substract_button`}
        isDisabled={!isValidAddedValue}
      >
        {addedValue === "1" ? "Decrement" : `- ${addedValue}`}
      </Button>

      <input type="number" value={value} readOnly id={`${baseId}_count_input`} />

      <Button
        onClick={handleAddButtonClick}
        id={`${baseId}_add_button`}
        isDisabled={!isValidAddedValue}
      >
        {addedValue === "1" ? "Increment" : `+ ${addedValue}`}
      </Button>

      <div>
        <input
          type="number"
          value={addedValue}
          id={`${baseId}_added-value_input`}
          onChange={handleAddedValueChange}
        />
      </div>
    </div>
  );
};
