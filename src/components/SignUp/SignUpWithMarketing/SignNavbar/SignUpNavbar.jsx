import React from "react";
import MansaLogo from "../../../../assets/MansaLogos/MansaLogo.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const SignUpNavbar = ({ isScrolled }) => {
  const navigate = useNavigate();

  const navbarStyle = {
    backgroundColor: isScrolled ? "white" : "#1A1D32", // Change '#1a1a2e' to your initial dark blue color
    transition: "background-color 0.3s",
  };

  return (
    <nav
      style={navbarStyle}
      className={`h-20 flex flex-row px-8 max-sm:px-3 items-center justify-between py-5 sticky top-0 z-50 w-full`}
    >
      <div className="flex flex-row items-center justify-center gap-6">
        <a href="https://relations.mansastars.com/">
          <img
            src={MansaLogo}
            className="h-14 max-sm:h-12"
            alt="Mansa's Logo"
          />
        </a>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          className="w-30"
          color="mainColor"
          type="button"
          onClick={() => navigate("/auth/login")}
        >
          Sign In
        </Button>
      </ThemeProvider>
    </nav>
  );
};

export default SignUpNavbar;
