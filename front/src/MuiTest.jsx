import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

export default function MuiTest() {
  const [formats, setFormats] = useState(null);
  const handleFormat = (_, newValue) => {
    setFormats(newValue);
  };
  return (
    <>
      <ToggleButtonGroup value={formats} onChange={handleFormat}>
        <ToggleButton value="スライス">スライス</ToggleButton>
        <ToggleButton value="フック">フック</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
