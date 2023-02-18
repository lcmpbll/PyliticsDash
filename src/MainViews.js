import { useState } from "react";
import BasicTable from "./Table";
import { OpportunityCard } from "./OpportunityCard";
import { Box } from "@mui/material";
import * as opportunities from "./opportunities.json";

// Liam Campbell
// I did this work on my own 2/17/23.
// I spent about 8-10 hrs on this, I hadn't used codesandbox before, but think it's great for trying out new front end components.

export default function MainView() {
  const data = opportunities.default;
  const [selectedRow, setSelectedRow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectingRow = (event, row) => {
    event.preventDefault();
    setSelectedRow(row);
    togglePopup();
  };

  return (
    <Box sx={{}}>
      <BasicTable handleRowClick={handleSelectingRow} data={data} />
      {isOpen ? (
        <OpportunityCard row={selectedRow} handleClose={togglePopup} />
      ) : null}
    </Box>
  );
}
