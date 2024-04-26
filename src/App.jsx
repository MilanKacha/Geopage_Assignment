import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import jsonData from "./assets/list.json";
import CommDropDown from "./CommDropDown";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  useEffect(() => {
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  }, [selectedState]);

  useEffect(() => {
    setSelectedSubDistrict("");
    setSelectedVillage("");
  }, [selectedDistrict]);

  useEffect(() => {
    setSelectedVillage("");
  }, [selectedSubDistrict]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSubDistrictChange = (event) => {
    setSelectedSubDistrict(event.target.value);
  };

  const handleVillageChange = (event) => {
    setSelectedVillage(event.target.value);
  };

  const countries = [...new Set(jsonData.map((item) => item.Country))];
  const states = selectedCountry
    ? [
        ...new Set(
          jsonData
            .filter((item) => item.Country === selectedCountry)
            .map((item) => item.State)
        ),
      ]
    : [];
  const districts = selectedState
    ? [
        ...new Set(
          jsonData
            .filter(
              (item) =>
                item.Country === selectedCountry && item.State === selectedState
            )
            .map((item) => item.District)
        ),
      ]
    : [];
  const subDistricts = selectedDistrict
    ? [
        ...new Set(
          jsonData
            .filter(
              (item) =>
                item.Country === selectedCountry &&
                item.State === selectedState &&
                item.District === selectedDistrict
            )
            .map((item) => item["Sub District"])
        ),
      ]
    : [];
  const villages = selectedSubDistrict
    ? [
        ...new Set(
          jsonData
            .filter(
              (item) =>
                item.Country === selectedCountry &&
                item.State === selectedState &&
                item.District === selectedDistrict &&
                item["Sub District"] === selectedSubDistrict
            )
            .map((item) => item.Village)
        ),
      ]
    : [];

  return (
    <Box sx={{ minWidth: 120 }}>
      <CommDropDown
        label="Country"
        items={countries}
        value={selectedCountry}
        onChange={handleCountryChange}
      />
      {selectedCountry && (
        <CommDropDown
          label="State"
          items={states}
          value={selectedState}
          onChange={handleStateChange}
        />
      )}
      {selectedState && (
        <CommDropDown
          label="District"
          items={districts}
          value={selectedDistrict}
          onChange={handleDistrictChange}
        />
      )}
      {selectedDistrict && (
        <CommDropDown
          label="Sub District"
          items={subDistricts}
          value={selectedSubDistrict}
          onChange={handleSubDistrictChange}
        />
      )}
      {selectedSubDistrict && (
        <CommDropDown
          label="Village"
          items={villages}
          value={selectedVillage}
          onChange={handleVillageChange}
        />
      )}
    </Box>
  );
};

export default App;
