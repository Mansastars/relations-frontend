import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Create a styled TextField component
const CustomStyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(26,29,50,0.5)", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "rgb(8,165,170)", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(8,165,170)", // Focused border color
    },
    "&.Mui-error fieldset": {
      borderColor: "#f44336", // Error border color
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(26,29,50,0.5)", // Default label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgb(8,165,170)", // Focused label color
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#f44336", // Error label color
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
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

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
            variant="outlined"
            autoFocus={autoFocus}
            error={!!error}
            type={type === "password" && showPassword ? "text" : type}
            multiline={multiline && true}
            helperText={error ? error.message : ""}
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    );
  }
);

export default CustomInput;
