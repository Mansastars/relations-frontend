import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import CharacterCounter from "./CharacterCounter";

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
      type = "text",
      autoFocus,
      multiline,
      characterLimit = 2000,
      endAdornment,
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(defaultValue.length);

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          event.preventDefault();
        }
      };

      const handleWheel = (event) => {
        if (event.target.type === "number") {
          event.preventDefault();
        }
      };

      const numberInputs = document.querySelectorAll('input[type="number"]');
      numberInputs.forEach((input) => {
        input.addEventListener("keydown", handleKeyDown);
        input.addEventListener("wheel", handleWheel);
      });

      return () => {
        numberInputs.forEach((input) => {
          input.removeEventListener("keydown", handleKeyDown);
          input.removeEventListener("wheel", handleWheel);
        });
      };
    }, []);

    useEffect(() => {
      setCharCount(defaultValue.length);
    }, [defaultValue]);

    const isTextType = type === "text" || multiline;

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          ...rules,
          validate: (value) =>
            !isTextType ||
            value.length <= characterLimit ||
            `Character limit exceeded (${characterLimit})`,
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <CustomStyledTextField
              {...field}
              inputRef={ref}
              label={label}
              variant="standard"
              autoFocus={autoFocus}
              error={!!error}
              type={type}
              multiline={multiline}
              helperText={error ? error.message : ""}
              onChange={(e) => {
                if (isTextType) {
                  setCharCount(e.target.value.length);
                }
                field.onChange(e);
              }}
              value={field.value}
              InputProps={{
                endAdornment: endAdornment ? (
                  <InputAdornment position="end">{endAdornment}</InputAdornment>
                ) : null,
              }}
            />
            {isTextType && (
              <CharacterCounter count={charCount} limit={characterLimit} />
            )}
          </div>
        )}
      />
    );
  }
);

export default CustomInput;
