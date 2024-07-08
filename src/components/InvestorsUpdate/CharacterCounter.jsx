import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CounterWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  width: "90%",
  marginTop: "-1px",
  color: "#757575",
  fontSize: "0.75rem",
});

const CharacterCounter = ({ count, limit }) => {
  return (
    <CounterWrapper>
      <Typography variant="caption" color={count > limit ? "error" : "inherit"}>
        {count}/{limit}
      </Typography>
    </CounterWrapper>
  );
};

export default CharacterCounter;
