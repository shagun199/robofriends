import React from "react";
import TextField from "@mui/material/TextField";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
