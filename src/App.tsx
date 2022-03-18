import { useCallback, useState } from "react";
import { AdvancedView } from "./AdvancedView";
import { Button } from "./components/Button";
import { VIEW } from "./constants/view";
import { SimpleView } from "./SimpleView";

const App = () => {
  const [view, setView] = useState<VIEW>(VIEW.SIMPLE);

  const handleSetView = useCallback(
    (view: VIEW) => () => {
      setView(view);
    },
    []
  );

  return (
    <div className="App">
      <div>
        <Button onClick={handleSetView(VIEW.SIMPLE)}>Simple View</Button>
        <Button onClick={handleSetView(VIEW.ADVANCED)}>Advanced View</Button>
      </div>

      {view === VIEW.SIMPLE && <SimpleView />}
      {view === VIEW.ADVANCED && <AdvancedView />}
    </div>
  );
};

export default App;
