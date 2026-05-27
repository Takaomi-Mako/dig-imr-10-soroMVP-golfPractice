import { Button } from "@mui/material";

export default function MuiTest() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <Button variant="text" color="secoundary">
        Text
      </Button>
      <Button variant="contained" color="secoundary">
        Contained
      </Button>
      <Button variant="outlined" color="secoundary">
        Outlined
      </Button>
      <br />
      <Button variant="text" color="success">
        Text
      </Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <Button variant="outlined" color="success">
        Outlined
      </Button>
      <br />
      <Button variant="text" color="error">
        Text
      </Button>
      <Button variant="contained" color="error">
        Contained
      </Button>
      <Button variant="outlined" color="error">
        Outlined
      </Button>
      <br />
      <Button variant="text" color="info">
        Text
      </Button>
      <Button variant="contained" color="info">
        Contained
      </Button>
      <Button variant="outlined" color="info">
        Outlined
      </Button>
    </>
  );
}
