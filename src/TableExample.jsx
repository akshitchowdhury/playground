import React from "react";

const TableExample = () => {
  return (
    <>
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Header 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td colSpan="2" style={{ textAlign: "center" }}>Merged Cell (spanning 2 columns)</td>
          <td>Row 1, Cell 4</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
          <td>Row 2, Cell 4</td>
        </tr>
        <tr>
          <td colSpan="3" style={{ textAlign: "center" }}>Merged Cell (spanning 3 columns)</td>
          <td>Row 3, Cell 4</td>
        </tr>
      </tbody>
    </table>
    </>
  );
};

export default TableExample;
