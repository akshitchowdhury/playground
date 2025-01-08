
import "./App.css";
// import CodeSplit from "./InterviewPrep/CodeSplit/CodeSplit";
import React, { Suspense } from 'react';
import TableExample from "./TableExample";
import CustomCarousel from "./playFiles/CustomCarousel/CustomCarousel";
import Table from "./playFiles/Table/Table";
function App() {

  return (
    <div className="App">
    {/* <TableExample/> */}
    <Table/>
    </div>
  );
}

export default App;
