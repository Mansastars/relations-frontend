import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";

// Create a styled TextField component
const CustomStyledTextField = styled(TextField)({
  width: "90%",
  "& .MuiInput-underline:after": {
    borderBottomColor: "#08A5AA", // Active color
  },
  "& .MuiInput-underline.Mui-error:after": {
    borderBottomColor: "#f44336", // Error color
  },
});

const CustomInput = React.forwardRef(
  (
    {
      name,
      control,
      label,
      defaultValue = "",
      rules = {},
      type,
      autoFocus,
      multiline,
    },
    ref
  ) => {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <CustomStyledTextField
            {...field}
            inputRef={ref} // forward the ref here
            label={label}
            variant="standard"
            autoFocus={autoFocus}
            error={!!error}
            type={type || "text"}
            multiline={multiline && true}
            helperText={error ? error.message : ""}
          />
        )}
      />
    );
  }
);

export default CustomInput;
