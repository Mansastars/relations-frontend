import React from "react";
import MansaLogo from "../../../../assets/MansaLogos/MansaLogo.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import { ImHourGlass } from "react-icons/im";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next"; // Import useTranslation for i18n
import LanguageSwitcher from "../../../LanguageSwitcher";
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
  const { t } = useTranslation(); // Initialize translation

  const navbarStyle = {
    backgroundColor: isScrolled ? "white" : "#1A1D32", // Smooth transition between colors
    transition: "background-color 0.5s ease-in-out, box-shadow 0.3s ease",
    boxShadow: isScrolled ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none", // Add shadow when scrolled
  };

  return (
    <nav
      style={navbarStyle}
      className="h-20 flex flex-row px-8 max-sm:px-3 items-center justify-between py-5 sticky top-0 z-50 w-full"
    >
      {/* Logo */}
      <div className="flex flex-row items-center justify-center gap-6">
        <a href="https://relations.mansastars.com/">
          <img
            src={MansaLogo}
            className="h-14 max-sm:h-12 hover:scale-105 transition-transform duration-300 ease-in-out"
            alt={t("mansaLogoAlt")} // Use translation for alt text
          />
        </a>
      </div>

      {/* Buttons */}
      <ThemeProvider theme={theme}>
        <div className="flex gap-4">
          <Button
            variant="contained"
            endIcon={<ImHourGlass />}
            className="w-30 hover:scale-105 transition-transform duration-300 ease-in-out"
            color="mainColor"
            type="button"
            onClick={() => navigate("/wait-list")}
          >
            {t("joinWaitlist")} {/* Use translation */}
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            className="w-30 hover:scale-105 transition-transform duration-300 ease-in-out"
            color="mainColor"
            type="button"
            onClick={() => navigate("/auth/login")}
          >
            {t("signIn")} {/* Use translation */}
          </Button>
          <LanguageSwitcher />
        </div>
      </ThemeProvider>
    </nav>
  );
};

export default SignUpNavbar;
