import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import Post from "./Post";

const CustomChangeColorInput = styled(TextField)`
  && {
    &:hover {
      fieldset {
        border-color: #ff0000; /* Set the border color on hover */
      }
    }
    &:focus-within {
      label {
        color: #ff0000; /* Red color for the label */
      }
      fieldset {
        border-color: #ff0000; /* No border color on focus */
      }
    }
  }
`;

const CustomInput = styled(TextField)`
  && {
    fieldset {
      border: 2px solid #2196f3; /* Set the default border style and color */
    }
    &:focus-within {
      label {
        color: #2196f3; /* Red color for the label */
      }
    }
    &:hover {
      fieldset {
        border-color: #2196f3; /* Set the border color on hover */
      }
    }
  }
`;

const StyledPost = styled(Post)`
  p {
    color: #ff5722; /* Styling for the p tag */
  }

  a {
    text-decoration: none;
    color: #ff0000; /* Styling for the anchor tag */
  }

  div {
    background-color: #ffeb3b; /* Styling for the div tag */
    padding: 10px; /* Add padding as needed */
  }
`;

function App() {
  return (
    <>
      <div>
        <h1>Change Color Component</h1>
        <CustomChangeColorInput label="Custom Input" variant="outlined" />
        <h1>Don't Change Color Component</h1>
        <CustomInput label="Custom Input" variant="outlined" />
        <StyledPost />
      </div>
    </>
  );
}

export default App;
