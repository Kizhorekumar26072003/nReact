import React from "react";
import data from "./data.json";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./src/Column";
import Table from "./src/Table";
const App = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table table={table} />
    </div>
  );
};

export default App;
