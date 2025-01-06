
import "./App.css";
// import CodeSplit from "./InterviewPrep/CodeSplit/CodeSplit";
import React, { Suspense } from 'react';
import TableExample from "./TableExample";
import CustomCarousel from "./playFiles/CustomCarousel/CustomCarousel";
function App() {

  return (
    <div className="App">
    {/* <TableExample/> */}
    <CustomCarousel/>
    </div>
  );
}

export default App;
