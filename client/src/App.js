import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DataProvider } from "./providers/DataProvider";

import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <React.Fragment>
            <CssBaseline />
            <Routes />
          </React.Fragment>
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
