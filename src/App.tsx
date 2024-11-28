import React from "react";
import ReportsWithExportToExcel from "./modules/features/ReportsWithExportToExcel/ReportsWithExportToExcel";
import { REPORTS } from "./modules/REPORTS";

function App() {
  return (
    <div className="App">
      <ReportsWithExportToExcel reportsList={REPORTS} />
    </div>
  );
}

export default App;
