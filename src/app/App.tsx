import { useCallback, useState } from "react";
import { AdvancedView } from "./AdvancedView";
import { SimpleView } from "./SimpleView";
import * as Styled from "./App.styles";
import { VIEW } from "../constants/view";

export const App = () => {
  const [view, setView] = useState<VIEW>(VIEW.SIMPLE);

  const handleSetView = useCallback(
    (view: VIEW) => () => {
      setView(view);
    },
    []
  );

  return (
    <Styled.Root>
      <Styled.TabsWrapper>
        <Styled.Tabs
          onClick={handleSetView(VIEW.SIMPLE)}
          aria-pressed={view === VIEW.SIMPLE}
          id="cy_simple_view_button"
        >
          Simple View
        </Styled.Tabs>
        <Styled.Tabs
          onClick={handleSetView(VIEW.ADVANCED)}
          aria-pressed={view === VIEW.ADVANCED}
          id="cy_advanced_view_button"
        >
          Advanced View
        </Styled.Tabs>
      </Styled.TabsWrapper>

      <Styled.TabsViewWrapper>
        {view === VIEW.SIMPLE && <SimpleView />}
        {view === VIEW.ADVANCED && <AdvancedView />}
      </Styled.TabsViewWrapper>
    </Styled.Root>
  );
};
