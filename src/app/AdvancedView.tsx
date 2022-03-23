import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { isValidNumber } from "../utils/isValidNumber";

import * as StyledApp from "./App.styles";
import * as Styled from "./AdvancedView.styles";

const baseId = "cy_advanced_view";

export const AdvancedView = () => {
  const { value, add, substract } = useCounter();
  const [addedValue, setAddedValue] = useState("1");

  const isValidAddedValue = useMemo(() => isValidNumber(addedValue), [addedValue]);

  const handleAddedValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    console.log({ value });
    setAddedValue(value);
  }, []);

  const handleAddButtonClick = useCallback(() => {
    add(Number(addedValue));
  }, [add, addedValue]);

  const handleSubstractButtonClick = useCallback(() => {
    substract(Number(addedValue));
  }, [substract, addedValue]);

  return (
    <Styled.Root id={baseId}>
      <Styled.Main>
        <StyledApp.Button
          onClick={handleSubstractButtonClick}
          id={`${baseId}_substract_button`}
          isDisabled={!isValidAddedValue}
        >
          {addedValue === "1" ? "Decrement" : `- ${addedValue}`}
        </StyledApp.Button>

        <StyledApp.Input type="number" value={value} readOnly id={`${baseId}_count_input`} />

        <StyledApp.Button
          onClick={handleAddButtonClick}
          id={`${baseId}_add_button`}
          isDisabled={!isValidAddedValue}
        >
          {addedValue === "1" ? "Increment" : `+ ${addedValue}`}
        </StyledApp.Button>
      </Styled.Main>

      <Styled.Below>
        <StyledApp.Input
          type="number"
          value={addedValue}
          id={`${baseId}_added-value_input`}
          onChange={handleAddedValueChange}
        />
      </Styled.Below>
    </Styled.Root>
  );
};
