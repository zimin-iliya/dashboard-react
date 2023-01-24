import React from "react";
import { ColorModeContext, UseMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Routes, Route } from "react-router-dom";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geograpy from "./scenes/geograpy";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = UseMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" exact component={<Dashboard/>} />
              {/* <Route path="/team" exact component={<Team/>} /> */}
              {/* <Route path="/contacts" exact component={<Contacts/>} /> */}
              {/* <Route path="/invoices" exact component={<Invoices/>} /> */}
              {/* <Route path="/form" exact component={<Form/>} /> */}
              {/* <Route path="/bar" exact component={<Bar/>} /> */}
              {/* <Route path="/pie" exact component={<Pie/>} /> */}
              {/* <Route path="/faq" exact component={<Line/>} /> */}
              {/* <Route path="/geography" exact component={<Geography/>} /> */}
              {/* <Route path="/calendar" exact component={<Calendar/>} /> */}


            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
