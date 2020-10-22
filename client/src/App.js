import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DataProvider } from "./providers/DataProvider";
import TextInput from "./components/TextInput";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <React.Fragment>
            <CssBaseline />
            <TextInput type="text" id="symbolText" name="symbolText" />
            <Routes />
          </React.Fragment>
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
