import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CommDropDown = ({ label, items, value, onChange }) => {
  return (
    <div style={{ marginBottom: "20px", width: "80%", margin: "20px auto" }}>
      <FormControl fullWidth>
        <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
        <Select
          labelId={`${label.toLowerCase()}-label`}
          id={`${label.toLowerCase()}-select`}
          value={value}
          label={label}
          onChange={onChange}
        >
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CommDropDown;
